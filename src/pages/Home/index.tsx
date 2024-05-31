import { useContext } from 'react';
import { Flex, Grid, Heading, Image, Text } from '@chakra-ui/react';

import { EventHomeCard } from 'src/components';
import { EventsContext } from 'src/context';
import { EventHomeCardSkt } from 'src/skeletons';

const Home: React.FC = () => {
  const { events, isLoading } = useContext(EventsContext);

  if (isLoading)
    return (
      <Flex flexDir="column" gap={6}>
        <Heading size="md">Próximos Eventos</Heading>
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          justifyContent="center"
          alignItems="center"
          placeItems="center"
          rowGap={12}
          columnGap={8}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
            <EventHomeCardSkt key={value} />
          ))}
        </Grid>
      </Flex>
    );

  return (
    <Flex flexDir="column" gap={36}>
      <Flex flexDir="column" gap={6}>
        <Heading size="md">Próximos Eventos</Heading>
        <Grid
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          justifyContent="center"
          alignItems="center"
          placeItems="center"
          rowGap={12}
          columnGap={8}
        >
          {events.map((event) => (
            <EventHomeCard {...event} key={event.objectID} />
          ))}
        </Grid>
      </Flex>

      <Flex pos="relative" w="100%" h={400} borderRadius="3xl">
        <Flex pos="absolute" w="100%" h="100%" bg="rgba(0, 0, 0, 0.7)" borderRadius="3xl" />
        <Text pos="absolute" bottom="1rem" left="2rem" fontSize="1.25rem" fontWeight={700} color="white">
          Boltick.com.ar
        </Text>

        <Flex
          direction="column"
          align="center"
          gap={4}
          pos="absolute"
          top="45%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Flex bg="white" height={1.5} w={100} />
          <Image src="/boltick-blanco.png" width={[200]} />
        </Flex>

        <Image src="/event-back-2.jpg" objectFit="cover" borderRadius="3xl" />
      </Flex>
    </Flex>
  );
};

export default Home;
