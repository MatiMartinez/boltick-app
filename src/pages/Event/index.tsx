import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { EventCard } from 'src/components';
import { useMatchEvent } from 'src/hooks';

const Event: React.FC = () => {
  const { event } = useMatchEvent();

  if (!event) return null;

  return (
    <Flex minH="100vh" minW="100vw" bg="#ececed">
      <Image src="/event-back-2.jpg" objectFit="cover" w="100vw" h="100vh" />

      <Flex
        position="fixed"
        top={0}
        left={0}
        w="100%"
        padding="3rem 1rem"
        height={70}
        align="center"
        justify="space-between"
      >
        <IconButton
          as={RouterLink}
          to="/"
          isRound
          aria-label="More Info"
          icon={<ChevronLeftIcon fontSize="2xl" />}
          bg="white"
          color="black"
          size="lg"
        />
        <Link bg="white" padding="2" borderRadius="full" href="https://www.instagram.com/paax_season/" target="_blank">
          <Image src="/instagram.svg" boxSize="8" />
        </Link>
      </Flex>

      <Flex
        padding="6"
        borderTopEndRadius="3xl"
        borderTopLeftRadius="3xl"
        bg="white"
        height="max-content"
        width="100%"
        maxW={800}
        boxShadow="2xl"
        position="fixed"
        bottom={0}
        left="50%"
        transform="translateX(-50%)"
      >
        <EventCard {...event} />
      </Flex>
    </Flex>
  );
};

export default Event;
