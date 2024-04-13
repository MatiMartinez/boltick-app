import { FC } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { useSearch } from 'src/hooks';
import { SearchResults } from './components';

const SearchBar: FC = () => {
  const { searchTerm, isOpen, isLoading, events, ref, handleChangeSearchTerm, onClickInside, onClose } = useSearch();

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
          <SearchResults events={events} isLoading={isLoading} onClose={onClose} />
        </Flex>
      )}
    </Flex>
  );
};

export default SearchBar;
