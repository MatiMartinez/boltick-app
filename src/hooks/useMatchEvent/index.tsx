import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { algoliaIndex } from 'src/utils/algolia';

const useMatchEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setTicket] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      algoliaIndex
        .getObject(id)
        .then((el) => {
          setTicket(el as Event);
        })
        .catch(() => {
          navigate('/');
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { event };
};

export default useMatchEvent;
