import { useEffect, useRef, useState } from 'react';
import { Event } from 'src/interfaces';
import debounce from 'lodash.debounce';
import { algoliaIndex } from 'src/utils/algolia';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

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

  return { searchTerm, isLoading, events, handleChangeSearchTerm };
};

export default useSearch;
