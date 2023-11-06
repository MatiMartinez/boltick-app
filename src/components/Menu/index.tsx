import { SmallCloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="More Info"
        icon={<HamburgerIcon fontSize="2xl" />}
        bg="white"
        color="black"
        size="lg"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex flexDir="row" justify="space-between" align="center">
              <Heading></Heading>
              <IconButton
                onClick={onClose}
                aria-label="Close Menu"
                icon={<SmallCloseIcon fontSize="2xl" />}
                bg="white"
                color="black"
                size="xs"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" gap={4}>
              <Text as={Link} to="/about" fontSize="lg" fontWeight={700} textTransform="uppercase">
                Nosotros
              </Text>
              <Text as={Link} to="/contact" fontSize="lg" fontWeight={700} textTransform="uppercase">
                Contacto
              </Text>
              <Text as={Link} to="/terms" fontSize="lg" fontWeight={700} textTransform="uppercase">
                Términos
              </Text>
              <Text as={Link} to="/help" fontSize="lg" fontWeight={700} textTransform="uppercase">
                Ayuda
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
