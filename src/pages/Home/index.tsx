import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useContext } from 'react';
import { EventHomeCard } from 'src/components';
import { EventsContext } from 'src/context';

const Home: React.FC = () => {
  const { events } = useContext(EventsContext);

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
          <EventHomeCard {...event} />
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;
