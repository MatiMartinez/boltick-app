import { Link } from 'react-router-dom';
import { SmallCloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const Menu: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="More Info"
        icon={<HamburgerIcon fontSize="2xl" />}
        size="lg"
        variant="iconbutton"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex flexDir="row" justify="flex-end" align="center">
              <IconButton
                onClick={onClose}
                aria-label="Close Menu"
                icon={<SmallCloseIcon fontSize="2xl" />}
                size="md"
                variant="iconbutton"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDir="column" gap={4}>
              <Text as={Link} to="/" fontSize="lg" fontWeight={700} textTransform="uppercase" onClick={onClose}>
                Inicio
              </Text>
              <Text as={Link} to="/about" fontSize="lg" fontWeight={700} textTransform="uppercase" onClick={onClose}>
                Nosotros
              </Text>
              <Text as={Link} to="/contact" fontSize="lg" fontWeight={700} textTransform="uppercase" onClick={onClose}>
                Contacto
              </Text>
              {/* <Text as={Link} to="/terms" fontSize="lg" fontWeight={700} textTransform="uppercase" onClick={onClose}>
                Términos
              </Text>
              <Text as={Link} to="/help" fontSize="lg" fontWeight={700} textTransform="uppercase" onClick={onClose}>
                Ayuda
              </Text> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
