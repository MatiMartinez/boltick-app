import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Menu } from 'src/components';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex flexDir="column" gap={6} paddingInline={[4, 8]} minH="100vh" minW="100vw" bg="white">
      <Flex align="center" width="100%" paddingTop={6}>
        <Menu />
      </Flex>
      {children}
      <Flex paddingBlock={[4, 8]}></Flex>
    </Flex>
  );
};

export default Layout;
