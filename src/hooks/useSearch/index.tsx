import { useEffect, useRef, useState } from 'react';
import { Event } from 'src/interfaces';
import debounce from 'lodash.debounce';
import { algoliaIndex } from 'src/utils/algolia';
import { useOutsideClick } from '@chakra-ui/react';

const useSearch = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  useOutsideClick({ ref, handler: () => setIsOpen(false) });

  const debouncedSearch = useRef(
    debounce(async (fn) => {
      await fn();
    }, 1000)
  ).current;

  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value.length >= 3) {
      setIsLoading(true);
      setIsOpen(true);
      debouncedSearch(() => handleSearch(e.target.value));
    }
  };

  const handleSearch = async (search: string) => {
    await algoliaIndex
      .search(search)
      .then(({ hits }) => {
        setEvents(hits as unknown as Event[]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickInside = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { searchTerm, isOpen, isLoading, events, ref, handleChangeSearchTerm, onClickInside, onClose };
};

export default useSearch;
