import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { Form } from './interface';
import { Event } from 'src/interfaces';
import { createFreePaymentService, createPaymentService } from 'src/services/payments';
import { algoliaIndex } from 'src/utils/algolia';
import { generateId } from 'src/utils/common';

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
      tickets: [],
    },
  });
  const [isLoading, tickets] = watch(['isLoading', 'tickets']);
  const [isFetchLoading, setIsFetchLoading] = useState(true);
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      algoliaIndex
        .getObject(id)
        .then((el) => {
          const currentEvent = el as Event;

          if (currentEvent.status !== 1) {
            navigate('/');
            return;
          }

          generateTickets(currentEvent);
          setEvent(currentEvent);
        })
        .catch(() => {
          navigate('/');
        })
        .finally(() => {
          setIsFetchLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateTickets = (event: Event) => {
    if (event.cost === 'FREE') {
      setValue('tickets', [
        { cost: 0, id: 'c8fca272-e31c-4f2f-a283-c88ef5dcc870', name: 'Entrada General', quantity: 0 },
      ]);
    }

    if (event.cost === 'PAID') {
      const newArr = event.tickets.map((el) => ({
        ...el,
        quantity: 0,
      }));
      setValue('tickets', newArr);
    }
  };

  const addTicket = (incoming_id: string) => {
    const prevState = getValues('tickets');
    const index = prevState.findIndex(({ id }) => id === incoming_id);

    if (index === -1) {
      setValue('tickets', prevState);
    }

    const updatedTickets = [...prevState];
    const newQuantity = prevState[index].quantity < 10 ? updatedTickets[index].quantity + 1 : 10;

    updatedTickets[index] = {
      ...updatedTickets[index],
      quantity: newQuantity,
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
    if (!event) return;

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

    await createPaymentService({
      event: event.name,
      id: generateId(event.code),
      items,
      phone: values.phone,
      user: values.email,
    })
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

  const onSubmitFreeEvent = async (values: Form) => {
    if (!event) return;

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

    await createFreePaymentService({
      event: event.name,
      id: generateId(event.code),
      items,
      phone: values.phone,
      user: values.email,
    })
      .then(() => {
        navigate(`/confirm-free-event/${event.objectID}`, { state: { items, user: values.email } });
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

  return {
    isFetchLoading,
    register,
    errors,
    event,
    tickets,
    isLoading,
    addTicket,
    removeTicket,
    onSubmit,
    onSubmitFreeEvent,
    handleSubmit,
  };
};

export default usePayment;
