import { CircularProgress, Flex, Heading } from '@chakra-ui/react';

const RedirectProgress: React.FC = () => {
  return (
    <Flex flexDir="column" justify="center" align="center" gap={8} minH="100vh" minW="100vw">
      <CircularProgress color="green.600" size={32} isIndeterminate />
      <Heading fontSize={{ base: '2xl', md: '4xl' }} textAlign="center">
        Preparando todo para tu compra.
      </Heading>
    </Flex>
  );
};

export default RedirectProgress;
