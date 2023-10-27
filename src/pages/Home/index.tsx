import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Heading, IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Flex flexDir="column" minH="100vh" minW="100vw" bg="#ececed">
      <Flex align="center" justify="space-between" paddingInline={4} width="100%" height={100}>
        <IconButton
          isRound
          aria-label="More Info"
          icon={<HamburgerIcon fontSize="2xl" />}
          bg="white"
          color="black"
          size="lg"
        />
        <Heading>Boltick</Heading>
      </Flex>

      <Link to="/event">Ir a evento</Link>
    </Flex>
  );
};

export default Home;
