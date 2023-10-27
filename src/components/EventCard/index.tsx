import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Heading, IconButton, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const EventCard: React.FC = () => {
  return (
    <Flex flexDir="column" gap={4}>
      <Heading color="#333333" size="xs">
        Paax Summer 2023
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
            Octubre 28, 2023
          </Text>
        </Flex>
        <Flex align="center" gap={2}>
          <TimeIcon color="#777777" />
          <Text fontSize="small" color="#777777">
            01:00 AM - 06:00 AM
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir="column" gap={2}>
        <Heading size="" color="#333333">
          Temporada Verano
        </Heading>
        <Text fontSize="sm" color="#777777">
          Lorem ipsum dolor sit amet consectetur adipiscing elit nisl fermentum pretium hendrerit, vulputate nisi at
          donec eros elementum hac nostra interdum ornare mauris eleifend, nulla tristique nam maecenas posuere luctus
          fames tempus torquent porta.
        </Text>
      </Flex>

      <Button
        as={Link}
        to="/payment"
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
