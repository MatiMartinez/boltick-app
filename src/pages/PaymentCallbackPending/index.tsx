import { Link } from 'react-router-dom';
import { ArrowForwardIcon, WarningIcon } from '@chakra-ui/icons';
import { Button, CircularProgress, Flex, Stack, Text } from '@chakra-ui/react';

import { usePaymentParams } from 'src/hooks';

const PaymentCallbackPending: React.FC = () => {
  const { isLoading } = usePaymentParams();

  if (isLoading)
    return (
      <Flex flexDir="column" align="center" justify="center" gap={12} minH="100vh" minW="100vw">
        <CircularProgress isIndeterminate color="green.600" />
      </Flex>
    );

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
      <Stack bg="orange.600" borderRadius="full" padding={4} width="max-content">
        <WarningIcon color="white" />
      </Stack>

      <Flex flexDir="column" gap={4} textAlign="center">
        <Text fontSize="lg" fontWeight={700}>
          Revisión de Pago en Proceso
        </Text>
        <Text fontSize="md">
          Parece que tu transacción está en revisión. Si notas que el monto fue descontado de tu cuenta, no te
          preocupes.
        </Text>
        <Text fontSize="md">
          Estamos en proceso de confirmar tu pago. Te notificaremos por correo electrónico tan pronto como se haya
          completado la verificación. Si necesitas asistencia, no dudes en contactarnos a través de nuestros canales de
          atención al cliente. Estamos aquí para ayudarte.
        </Text>
      </Flex>

      <Button as={Link} to="/" size="lg" rightIcon={<ArrowForwardIcon />}>
        Volver al sitio
      </Button>
    </Flex>
  );
};

export default PaymentCallbackPending;
