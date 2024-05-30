import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const About: React.FC = () => {
  return (
    <Flex flexDir="column" gap={4} paddingBlock={16}>
      <Heading>Nosotros</Heading>
      <Text>
        Boltick es una empresa líder en la venta de entradas digitales a través de su innovadora plataforma web 3.
        Ofrecemos a nuestros clientes una experiencia de compra segura y eficiente, brindando acceso a eventos y
        espectáculos de forma rápida y sencilla. Nuestro compromiso es facilitar la vida de nuestros usuarios,
        proporcionando un servicio de calidad y actualizado a las últimas tendencias tecnológicas. ¡Únete a la
        revolución digital con Boltick!
      </Text>
    </Flex>
  );
};

export default About;
