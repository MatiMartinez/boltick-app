import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { dateToText } from 'src/utils/date';

const EventCard: React.FC<Event> = ({ date, name, schedule, objectID }) => {
  return (
    <Flex flexDir="column" gap={4}>
      <Heading color="#333333" size="md">
        {name}
      </Heading>

      <Flex
        flexDir="row"
        align="center"
        justify="space-between"
        padding={3}
        borderRadius="lg"
        border="1px solid #dddddd"
      >
        <Flex flexDir="column" gap={2}>
          <Flex flexDir="row" gap={1} align="center">
            <Avatar size="sm" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar size="sm" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar size="sm" name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </Flex>
        </Flex>
        <IconButton isRound aria-label="More Info" icon={<ArrowRightIcon />} bg="#86A789" color="white" />
      </Flex>

      <Flex flexDir="row" gap={8}>
        <Flex align="center" gap={2}>
          <CalendarIcon color="#777777" />
          <Text fontSize="small" color="#777777">
            {dateToText(schedule)}
          </Text>
        </Flex>
        <Flex align="center" gap={2}>
          <TimeIcon color="#777777" />
          <Text fontSize="small" color="#777777">
            {date}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" gap={2}>
        <Heading size="sm" color="#333333">
          Sobre el Evento
        </Heading>
        <Text fontSize="sm" color="#777777">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nisl fermentum pretium hendrerit, vulputate nisi at
          donec eros elementum hac nostra interdum ornare mauris eleifend, nulla tristique nam maecenas posuere luctus
          fames tempus torquent porta.
        </Text>
      </Flex>

      <Button
        as={Link}
        to={`/payment/${objectID}`}
        size="lg"
        borderRadius="3xl"
        rightIcon={<ArrowRightIcon />}
        mt={6}
        bg="#86A789"
        color="white"
      >
        Comprar
      </Button>
    </Flex>
  );
};

export default EventCard;
