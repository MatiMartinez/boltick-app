import { CircularProgress, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { Props } from './interface';

const RedirectProgress: FC<Props> = ({ text }) => {
  return (
    <Flex flexDir="column" justify="center" align="center" gap={8} minH="100vh" minW="100vw">
      <CircularProgress color="green.600" size={32} isIndeterminate />
      <Heading fontSize={{ base: '2xl', md: '4xl' }} textAlign="center">
        {text}
      </Heading>
    </Flex>
  );
};

export default RedirectProgress;
