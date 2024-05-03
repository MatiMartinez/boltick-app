import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Flex, Heading, Spinner, Text } from '@chakra-ui/react';

import { Props } from './interface';
import { dateToSpanishText } from 'src/utils/date';

const SearchResults: FC<Props> = ({ events, isLoading, onClose }) => {
  if (isLoading)
    return (
      <Flex justify="center" align="center" paddingBlock={16}>
        <Spinner size="lg" />
      </Flex>
    );

  if (events.length === 0)
    return (
      <Flex justify="center" align="center" paddingBlock={16}>
        <Text fontSize="lg" textAlign="center">
          No encontramos resultados que coincidan con tu búsqueda.
        </Text>
      </Flex>
    );

  return (
    <>
      {events.map(({ objectID, name, category, start_date }, i) => (
        <Flex
          as={Link}
          to={`/event/${objectID}`}
          align="center"
          gap={4}
          paddingInline={6}
          paddingBlock={4}
          borderBottomRadius={events.length === i + 1 ? '3xl' : 0}
          _hover={{ bg: '#f3f3f3', color: 'inherit' }}
          onClick={onClose}
          key={objectID}
        >
          <Avatar size="lg" name={name} src="/paax.jpeg" />
          <Flex flexDir="column" gap={1}>
            <Heading size="md">{name}</Heading>
            <Text fontSize="lg" color="#777777">
              {category} - {dateToSpanishText(start_date)}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default SearchResults;
