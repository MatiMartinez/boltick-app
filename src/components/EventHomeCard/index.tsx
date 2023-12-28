import { CalendarIcon, InfoIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { dateToSpanishText } from 'src/utils/date';

const EventHomeCard: React.FC<Event> = ({ category, location_name, name, objectID, start_date }) => {
  return (
    <Flex
      as={Link}
      to={`/event/${objectID}`}
      w="100%"
      minH={350}
      borderRadius="3xl"
      boxShadow="lg"
      _hover={{ color: 'inherit' }}
      position="relative"
    >
      <Image
        src="/paax.jpeg"
        alt={name}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        borderRadius="3xl"
      />

      <Box position="absolute" top={0} left={0} w="100%" h="100%" bg="#000" opacity="40%" borderRadius="3xl" />

      <Flex flexDir="column" justify="space-between" padding={6} zIndex={0} color="white">
        <Flex flexDir="column">
          <Heading size="md">{name}</Heading>
          <Text fontSize="md">{category}</Text>
        </Flex>

        <Flex flexDir="column" gap={2}>
          <Flex align="center" gap={2}>
            <CalendarIcon />
            <Text fontSize="sm">{dateToSpanishText(start_date)}</Text>
          </Flex>
          <Flex align="center" gap={2}>
            <InfoIcon />
            <Text fontSize="sm">{location_name}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventHomeCard;
