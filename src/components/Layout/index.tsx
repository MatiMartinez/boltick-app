import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Flex, Heading, Image, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Menu, SearchEvent } from 'src/components';
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
          <Heading fontSize={32} letterSpacing={4}>
            Boltick
          </Heading>
        </Flex>

        <ChakraLink
          bg="white"
          padding={2}
          borderColor="gray.300"
          borderWidth={1}
          borderRadius="full"
          href="https://www.instagram.com/paax_season/"
          target="_blank"
        >
          <Image src="/instagram.svg" boxSize="8" />
        </ChakraLink>
      </Flex>

      {withSearch && <SearchEvent />}

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
            <Text>Design amazing digital experiences that create more happy in the world.</Text>
          </Flex>

          <Flex flexDir="column" textAlign={{ base: 'inherit', sm: 'end' }} gap={2}>
            <Heading fontSize={16}>Legal</Heading>
            <Text as={Link} to="/terms">
              Términos y Condiciones
            </Text>
            <Text as={Link} to="/">
              Políticas de Privacidad
            </Text>
            <Text as={Link} to="/">
              Políticas de Devolución
            </Text>
            <Text as={Link} to="/contact">
              Contacto
            </Text>
          </Flex>
        </Flex>

        <Flex flexDir={{ base: 'column-reverse', sm: 'row' }} justify="space-between" align="center" gap={2} w="100%">
          <Text fontSize={12}>&copy; 2023 Boltick. Todos los derechos reservados.</Text>
          <Flex align="center" gap={2}>
            <Text>Redes Sociales</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
