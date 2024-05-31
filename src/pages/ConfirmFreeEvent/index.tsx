import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowForwardIcon, CalendarIcon, CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { Button, Divider, Flex, Heading, Text } from '@chakra-ui/react';

import { useMatchEvent } from 'src/hooks';
import { dateToHHMM, dateToSpanishText } from 'src/utils/date';

const ConfirmFreeEvent: FC = () => {
  const { state } = useLocation();
  const items = state?.items ?? [];
  const user = state?.user ?? '';

  const { event, isLoading } = useMatchEvent();

  if (!event) return null;

  if (isLoading) return null;

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      gap={12}
      minH="100vh"
      minW="100vw"
      paddingInline={{ base: 8, sm: 16, md: 48, lg: '30%', xl: '30%', '2xl': '35%' }}
    >
      <Flex flexDir="column" gap={4} textAlign="center">
        <Text fontSize="lg" fontWeight={700}>
          ¡Solicitud Exitosa!
        </Text>
        <Text fontSize="md">
          Has solicitado las entradas correctamente. <br />
          En los siguientes minutos recibirás un correo electrónico a <b>{user}</b> con los detalles de tu compra.
        </Text>
      </Flex>

      <Divider />

      <Flex direction="column" gap={4}>
        <Flex flexDir="column">
          <Heading fontSize={{ base: 20, md: 32 }}>{event.name}</Heading>
          <Text>{event.category}</Text>
        </Flex>

        <Flex direction="row" align="center" gap={4}>
          <CalendarIcon fontSize="4xl" color="gray.500" />
          <Flex direction="column" gap={1}>
            <Text fontWeight={600}>{dateToSpanishText(event.start_date)}</Text>
            <Text>
              {dateToHHMM(event.start_date)} - {dateToHHMM(event.finish_date)}
            </Text>
          </Flex>
        </Flex>

        <Flex direction="row" align="center" gap={4}>
          <InfoIcon fontSize="4xl" color="gray.500" />
          <Flex direction="column" gap={1}>
            <Text fontWeight={600}>{event.location_address}</Text>
            <Text>{event.location_name}</Text>
          </Flex>
        </Flex>

        <Flex direction="row" align="center" gap={4}>
          <CheckCircleIcon fontSize="4xl" color="gray.500" />
          <Flex direction="column" gap={1}>
            <Text fontWeight={600}>{items[0]?.quantity} Entradas</Text>
            <Text>Sin costo</Text>
          </Flex>
        </Flex>
      </Flex>

      <Divider />

      <Button as={Link} to="/" size="lg" rightIcon={<ArrowForwardIcon />}>
        Volver al sitio
      </Button>
    </Flex>
  );
};

export default ConfirmFreeEvent;
