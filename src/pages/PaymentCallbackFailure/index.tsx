import { Link } from 'react-router-dom';
import { ArrowForwardIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';

const PaymentCallbackFailure: React.FC = () => {
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
      <Stack bg="red.600" borderRadius="full" padding={4} width="max-content">
        <WarningTwoIcon color="white" />
      </Stack>

      <Flex flexDir="column" gap={4} textAlign="center">
        <Text fontSize="lg" fontWeight={700}>
          ¡Ocurrio un error con el pago!
        </Text>
        <Text fontSize="md">
          No hemos podido procesar tu pago. Esto puede deberse a un problema con tu tarjeta o método de pago
          seleccionado. Asegúrate de que la información de pago es correcta o intenta con un método de pago diferente.
        </Text>
      </Flex>

      <Button as={Link} to="/" size="lg" rightIcon={<ArrowForwardIcon />}>
        Volver al sitio
      </Button>
    </Flex>
  );
};

export default PaymentCallbackFailure;
