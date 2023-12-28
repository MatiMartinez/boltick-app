import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Event } from 'src/interfaces';
import { algoliaIndex } from 'src/utils/algolia';

interface InitialState {
  events: Event[];
  isLoading: boolean;
}

const initialState: InitialState = {
  events: [],
  isLoading: true,
};

export const EventsContext = createContext<InitialState>(initialState);

const EventsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(initialState.events);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);

  useEffect(() => {
    algoliaIndex
      .search('')
      .then(({ hits }) => {
        setEvents(hits as unknown as Event[]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return <EventsContext.Provider value={{ events, isLoading }}>{children}</EventsContext.Provider>;
};

export default EventsProvider;
