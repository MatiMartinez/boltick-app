import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Grid, Heading, Input, InputGroup, InputLeftElement, Spinner, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { EventHomeCard } from 'src/components';
import { useSearch } from 'src/hooks';
import { dateToText } from 'src/utils/date';
import { local_events } from 'src/utils/events';

const Home: React.FC = () => {
  const { searchTerm, events, isLoading, handleChangeSearchTerm } = useSearch();

  return (
    <>
      <Flex pos="relative" zIndex={1}>
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            value={searchTerm}
            onChange={handleChangeSearchTerm}
            placeholder="Search event, stand up..."
            borderTopRadius="3xl"
            borderBottomRadius={searchTerm.length >= 3 ? 0 : '3xl'}
          />
        </InputGroup>

        {searchTerm.length >= 3 && (
          <Flex
            flexDir="column"
            pos="absolute"
            top="100%"
            left={0}
            w="100%"
            bg="white"
            borderTopRadius={0}
            borderBottomRadius="3xl"
            boxShadow="3xl"
            borderWidth={1}
            borderColor="gray.300"
          >
            {isLoading ? (
              <Flex justify="center" align="center" paddingBlock={16}>
                <Spinner size="lg" />
              </Flex>
            ) : (
              events.map((el, i) => (
                <Flex
                  as={Link}
                  to={`/event/${el.objectID}`}
                  align="center"
                  gap={4}
                  paddingInline={4}
                  paddingBlock={3}
                  borderBottomRadius={events.length === i + 1 ? '3xl' : 0}
                  _hover={{ bg: '#f3f3f3', color: 'inherit' }}
                >
                  <Avatar name={el.name} src="/paax.jpeg" />
                  <Flex flexDir="column">
                    <Heading size="sm">{el.name}</Heading>
                    <Text fontSize="small" color="#777777">
                      {dateToText(el.schedule)}
                    </Text>
                  </Flex>
                </Flex>
              ))
            )}
          </Flex>
        )}
      </Flex>

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
          {local_events
            .sort((a, b) => a.schedule - b.schedule)
            .map((event) => (
              <EventHomeCard {...event} />
            ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Home;
