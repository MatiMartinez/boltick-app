import { useContext } from 'react';
import { Flex, Grid, Heading } from '@chakra-ui/react';

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
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
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
    <Flex flexDir="column" gap={6}>
      <Heading size="md">Próximos Eventos</Heading>
      <Grid
        templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
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
  );
};

export default Home;
