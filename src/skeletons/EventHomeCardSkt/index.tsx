import { FC } from 'react';
import { Skeleton } from '@chakra-ui/react';

const EventHomeCardSkt: FC = () => {
  return <Skeleton w="100%" minH={350} borderRadius="3xl" boxShadow="lg" />;
};

export default EventHomeCardSkt;
