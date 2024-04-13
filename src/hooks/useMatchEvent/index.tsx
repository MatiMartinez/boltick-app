import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { algoliaIndex } from 'src/utils/algolia';

const useMatchEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (id) {
      algoliaIndex
        .getObject(id)
        .then((el) => {
          setEvent(el as Event);
        })
        .catch(() => {
          navigate('/');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { event, isLoading };
};

export default useMatchEvent;
