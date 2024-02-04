import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Form } from './interface';
import { Event } from 'src/interfaces';
import { createMercadoPagoService } from 'src/services/mercadopago';
import { algoliaIndex } from 'src/utils/algolia';

const usePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

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
  const [isLoading, tickets] = watch(['isLoading', 'tickets']);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      algoliaIndex
        .getObject(id)
        .then((el) => {
          setEvent(el as Event);
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
    const has_tickets = values.tickets.some(({ quantity }) => quantity > 0);
    if (!has_tickets) {
      toast({
        description: 'Debes seleccionar una entrada como mínimo.',
        duration: 5000,
        isClosable: true,
        position: 'top-left',
        status: 'error',
        title: 'Selección Requerida.',
      });
      return;
    }

    setValue('isLoading', true);

    const items = values.tickets.map(({ cost, name, quantity }) => ({
      title: name,
      quantity,
      unit_price: cost,
    }));

    await createMercadoPagoService({ items, phone: values.phone, user: values.email })
      .then((response) => {
        window.location.href = response.data.url;
      })
      .catch(() => {
        toast({
          description: 'Intenta nuevamente o comunicate por Whatsapp si el problema persiste.',
          duration: 5000,
          isClosable: true,
          position: 'top-left',
          status: 'error',
          title: 'Ocurrio un error.',
        });
        setValue('isLoading', false);
      });
  };

  return { register, errors, event, tickets, isLoading, addTicket, removeTicket, onSubmit, handleSubmit };
};

export default usePayment;
