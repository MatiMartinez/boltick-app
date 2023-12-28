import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Event } from 'src/interfaces';
import { dateToText } from 'src/utils/date';

const EventHomeCard: React.FC<Event> = ({ date, name, objectID, schedule }) => {
  return (
    <Flex
      as={Link}
      to={`/event/${objectID}`}
      flexDir="column"
      gap={4}
      padding={4}
      w="max-content"
      borderWidth={1}
      borderRadius="3xl"
      boxShadow="lg"
      _hover={{ color: 'inherit' }}
    >
      <Box pos="relative" w="100%" h={0} paddingBottom="100%">
        <Image src="/paax.jpeg" alt={name} position="absolute" w="100%" h="100%" objectFit="cover" borderRadius="3xl" />
      </Box>

      <Flex flexDir="column" gap={2}>
        <Heading size="md">{name}</Heading>

        <Flex flexDir="row" gap={4}>
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
      </Flex>
    </Flex>
  );
};

export default EventHomeCard;
