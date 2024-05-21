import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/Button';

export const theme = extendTheme({
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  components: {
    Button,
  },
});
