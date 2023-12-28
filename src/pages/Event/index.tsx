import { InfoOutlineIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useMatchEvent } from 'src/hooks';
import { dateToHHMM, dateToSpanishText } from 'src/utils/date';

const Event: React.FC = () => {
  const { event } = useMatchEvent();

  if (!event) return null;

  const { category, description, location_name, location_address, name, objectID, start_date } = event;

  return (
    <>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align="center"
        gap={{ base: 8 }}
        paddingBlock={[4, 8, 8, 8, 16, 16]}
      >
        <Flex w="100%" position="relative">
          <Flex
            flexDir="row"
            align="center"
            gap={2}
            paddingInline={4}
            paddingBlock={2}
            borderRadius="3xl"
            position="absolute"
            top={{ base: 4, md: 8 }}
            left={{ base: 4, md: 8 }}
            bg="black"
            opacity="70%"
          >
            <Text color="white" fontWeight={600}>
              {category}
            </Text>
          </Flex>
          <Image
            src="/event-back.jpg"
            alt={event.name}
            w={{ base: '100%', lg: 'auto' }}
            h={{ base: 225, sm: 300, md: 500, lg: 550, xl: 600 }}
            borderRadius="3xl"
            objectFit="cover"
            objectPosition="bottom"
          />
        </Flex>

        <Flex flexDir="column" gap={{ base: 4, sm: 6 }} w="100%">
          <Text fontWeight={600} color="green.600">
            {dateToSpanishText(start_date)}, {dateToHHMM(start_date)}
          </Text>

          <Flex flexDir="column" gap={{ base: 1, sm: 2 }}>
            <Heading fontSize={24}>{name}</Heading>
            <Text>{category}</Text>
          </Flex>

          <Flex flexDir="column" gap={{ base: 0, md: 1 }}>
            <Text fontSize="sm" fontWeight={600}>
              {location_name}
            </Text>
            <Text fontSize="sm">{location_address}</Text>
          </Flex>

          <Text fontSize={{ base: 14, md: 16 }}>{description}</Text>

          <Button as={RouterLink} to={`/payment/${objectID}`} size="lg" color="white" bg="green.600">
            Comprar Tickets
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default Event;
