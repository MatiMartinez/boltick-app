import { CircularProgress, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

import { useMatchEvent } from 'src/hooks';
import { dateToSpanishTextAndHHMM } from 'src/utils/date';
import { NextButton } from './components';

const Event: React.FC = () => {
  const { event, isLoading } = useMatchEvent();

  if (isLoading)
    return (
      <Flex paddingBlock={{ base: 48, md: 64 }} justify="center">
        <CircularProgress isIndeterminate color="green.600" />
      </Flex>
    );

  if (!event) return null;

  const { category, description, google_location, location_name, location_address, name, start_date, status } = event;

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
            bg="white"
          >
            <Text color="black" fontWeight={700}>
              {category}
            </Text>
          </Flex>
          <Image
            src={event.image ?? '/event-back.jpg'}
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
            {dateToSpanishTextAndHHMM(start_date)}
          </Text>

          <Flex flexDir="column" gap={{ base: 1, sm: 2 }}>
            <Heading fontSize={24}>{name}</Heading>
            <Text>{category}</Text>
          </Flex>

          {status > 0 && (
            <Flex flexDir="column" gap={{ base: 0, md: 1 }}>
              <Text fontSize="sm" fontWeight={600}>
                {location_name}
              </Text>
              <Text fontSize="sm">{location_address}</Text>
              <Link
                textDecor="underline"
                href={google_location}
                target="_blank"
                referrerPolicy="no-referrer"
                w="max-content"
              >
                <Text fontSize="sm">Ver Google Maps</Text>
              </Link>
            </Flex>
          )}

          <Text fontSize={{ base: 14, md: 16 }}>{description}</Text>

          <NextButton event={event} />
        </Flex>
      </Flex>
    </>
  );
};

export default Event;
