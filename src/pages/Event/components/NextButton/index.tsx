import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

import { Props } from './interface';

const NextButton: FC<Props> = ({ event }) => {
  if (event.status === 0)
    return (
      <Button size="lg" isDisabled>
        Próximamente
      </Button>
    );

  if (event.status === 1)
    return (
      <Button as={Link} to={`/payment/${event.objectID}`} size="lg">
        {event.cost === 'FREE' ? 'Obtener Tickets' : 'Comprar Tickets'}
      </Button>
    );

  return null;
};

export default NextButton;
