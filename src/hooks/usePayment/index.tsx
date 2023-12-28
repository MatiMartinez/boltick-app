import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { createMercadoPagoService } from 'src/services/mercadopago';
import { algoliaIndex } from 'src/utils/algolia';

interface Ticket {
  cost: number;
  id: string;
  name: string;
  quantity: number;
}

interface Form {
  email: string;
  isLoading: boolean;
  phone: string;
  tickets: Ticket[];
}

const usePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    defaultValues: {
      email: '',
      isLoading: false,
      phone: '',
      tickets: [
        { cost: 2000, id: '627a3d1d-f001-4e2d-af60-268e1111b10d', name: 'Entrada General', quantity: 0 },
        { cost: 5000, id: '32162930-32c4-4a84-9027-bf48e460909f', name: 'Entrada VIP', quantity: 0 },
      ],
    },
  });
  const tickets = watch('tickets');
  console.log(errors);
  const [event, setEvent] = useState<Event>();

  useEffect(() => {
    if (id) {
      algoliaIndex
        .getObject(id)
        .then((el) => {
          const ev = el as Event;
          setEvent(ev);
        })
        .catch(() => {
          navigate('/');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTicket = (incoming_id: string) => {
    const prevState = getValues('tickets');
    const index = prevState.findIndex(({ id }) => id === incoming_id);

    if (index === -1) {
      setValue('tickets', prevState);
    }

    const updatedTickets = [...prevState];
    updatedTickets[index] = {
      ...updatedTickets[index],
      quantity: updatedTickets[index].quantity + 1,
    };

    setValue('tickets', updatedTickets);
  };

  const removeTicket = (incoming_id: string) => {
    const prevState = getValues('tickets');
    const index = prevState.findIndex(({ id }) => id === incoming_id);

    if (index === -1) {
      setValue('tickets', prevState);
    }

    const newQuantity = prevState[index].quantity > 0 ? prevState[index].quantity - 1 : 0;

    const updatedTickets = [...prevState];
    updatedTickets[index] = {
      ...updatedTickets[index],
      quantity: newQuantity,
    };

    setValue('tickets', updatedTickets);
  };

  const onSubmit = async (values: Form) => {
    const items = values.tickets.map(({ cost, name, quantity }) => ({
      title: name,
      quantity,
      unit_price: cost,
    }));

    await createMercadoPagoService({ items, user: values.email }).then((response) => {
      window.location.href = response.data.url;
    });
  };

  return { register, event, tickets, addTicket, removeTicket, onSubmit, handleSubmit };
};

export default usePayment;
