import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Flex, Heading, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Menu, SearchBar } from 'src/components';
import { useScroll } from 'src/hooks';

interface Props {
  withSearch?: boolean;
}

const Layout: React.FC<PropsWithChildren & Props> = ({ children, withSearch }) => {
  useScroll();

  return (
    <Flex
      flexDir="column"
      gap={{ base: 6, md: 12 }}
      paddingBlock={[4, 8]}
      paddingInline={[4, 8, 8, 32, 64, 80]}
      minH="100vh"
    >
      <Flex flexDirection="row" justify="space-between" align="center" gap={4}>
        <Flex flexDirection="row" align="center" gap={4}>
          <Menu />
          <Link to="/">
            <Image src="/boltick-negro.png" alt="Logo" width={[150, 150, 175]} />
          </Link>
        </Flex>

        <ChakraLink
          bg="white"
          padding={2}
          borderColor="gray.300"
          borderWidth={1}
          borderRadius="full"
          href="https://www.instagram.com/boltick.web3"
          target="_blank"
        >
          <Image src="/instagram.svg" boxSize="8" />
        </ChakraLink>
      </Flex>

      {withSearch && <SearchBar />}

      {children}

      <Divider />

      <Flex flexDir="column" gap={8} paddingBlock={[1, 2]}>
        <Flex
          flexDir={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          textAlign={{ base: 'center', sm: 'inherit' }}
          gap={{ base: 12, sm: 4 }}
        >
          <Flex flexDir="column" gap={{ base: 2, sm: 4 }} maxW={200}>
            <Heading fontSize={32} letterSpacing={4}>
              Boltick
            </Heading>
            <Text>¡Únete a la revolución digital con Boltick!</Text>
          </Flex>

          <Flex flexDir="column" textAlign={{ base: 'inherit', sm: 'end' }} gap={2}>
            <Heading fontSize={16}>Legal</Heading>
            <Text as={Link} to="/about">
              Nosotros
            </Text>
            <Text as={Link} to="/contact">
              Contacto
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir={{ base: 'column-reverse', sm: 'row' }} justify="space-between" align="center" gap={2} w="100%">
          <Text fontSize={12}>&copy; 2024 Boltick. Todos los derechos reservados.</Text>
          {/* <Flex align="center" gap={2}>
            <Text>Redes Sociales</Text>
          </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
