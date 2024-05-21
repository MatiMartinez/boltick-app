import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {},
  variants: {
    solid: {
      bg: 'green.600',
      color: 'white',
      _hover: {
        bg: 'green.800',
      },
    },
    outline: {
      border: '2px solid',
      borderColor: 'green.600',
      color: 'green.600',
      _hover: {
        bg: 'green.100',
      },
    },
    iconbutton: {
      _hover: {
        bg: 'gray.200',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
});
