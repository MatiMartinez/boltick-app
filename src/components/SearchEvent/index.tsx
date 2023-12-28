import { Link } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Flex, Heading, Input, InputGroup, InputLeftElement, Spinner, Text } from '@chakra-ui/react';
import { useSearch } from 'src/hooks';
import { dateToSpanishText } from 'src/utils/date';

const SearchEvent: React.FC = () => {
  const { searchTerm, isOpen, isLoading, events, ref, handleChangeSearchTerm, onClickInside } = useSearch();

  return (
    <Flex pos="relative" zIndex={1} ref={ref}>
      <InputGroup size="lg">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          onClick={onClickInside}
          placeholder="Buscar evento..."
          borderTopRadius="3xl"
          borderBottomRadius={isOpen && searchTerm.length >= 3 ? 0 : '3xl'}
        />
      </InputGroup>

      {isOpen && searchTerm.length >= 3 && (
        <Flex
          flexDir="column"
          pos="absolute"
          top="100%"
          left={0}
          w="100%"
          bg="white"
          borderTopRadius={0}
          borderBottomRadius="3xl"
          boxShadow="lg"
          borderWidth={1}
          borderColor="gray.300"
        >
          {isLoading ? (
            <Flex justify="center" align="center" paddingBlock={16}>
              <Spinner size="lg" />
            </Flex>
          ) : (
            events.map(({ objectID, name, category, start_date }, i) => (
              <Flex
                as={Link}
                to={`/event/${objectID}`}
                align="center"
                gap={4}
                paddingInline={6}
                paddingBlock={4}
                borderBottomRadius={events.length === i + 1 ? '3xl' : 0}
                _hover={{ bg: '#f3f3f3', color: 'inherit' }}
              >
                <Avatar size="lg" name={name} src="/paax.jpeg" />
                <Flex flexDir="column" gap={1}>
                  <Heading size="md">{name}</Heading>
                  <Text fontSize="lg" color="#777777">
                    {category} - {dateToSpanishText(start_date)}
                  </Text>
                </Flex>
              </Flex>
            ))
          )}
        </Flex>
      )}
    </Flex>
  );
};

export default SearchEvent;
