import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { EventCard } from 'src/components';

const Intro: React.FC = () => {
  return (
    <Flex minH="100vh" minW="100vw" bg="#ececed">
      <Image src="/event-back.jpg" objectFit="cover" />
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
        position="fixed"
        bottom={0}
      >
        <EventCard />
      </Flex>
    </Flex>
  );
};

export default Intro;
