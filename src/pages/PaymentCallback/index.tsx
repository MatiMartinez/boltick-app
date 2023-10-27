import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons';
import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PaymentCallback: React.FC = () => {
  return (
    <Flex flexDir="column" align="center" justify="center" gap={12} minH="100vh" minW="100vw" bg="#ececed">
      <Stack bg="green.600" borderRadius="full" padding={4} width="max-content">
        <CheckIcon color="white" />
      </Stack>

      <Flex flexDir="column" textAlign="center">
        <Text fontSize="md" fontWeight={700}>
          Total amount
        </Text>
        <Text fontSize="5xl" fontWeight={700}>
          $ 12.000
        </Text>
      </Flex>

      <Flex flexDir="column" gap={4} textAlign="center">
        <Text fontSize="md" fontWeight={700}>
          Payment Successful!
        </Text>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipiscing, elit dictumst non erat molestie integer.
        </Text>
      </Flex>

      <Stack position="fixed" bottom="2rem" left="1rem" right="1rem">
        <Button
          as={Link}
          to="/"
          size="lg"
          borderRadius="3xl"
          rightIcon={<ArrowForwardIcon />}
          bg="#86A789"
          color="white"
        >
          Continuar
        </Button>
      </Stack>
    </Flex>
  );
};

export default PaymentCallback;
