import { extendTheme } from '@chakra-ui/react';

// Custom color palette based on the logo image analysis
const colors = {
  brand: {
    50: '#e3f2fd', // light blue
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3', // default blue
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    // Adding gold/yellow color
    gold: {
      50: '#fffde7',
      100: '#fff9c4',
      200: '#fff59d',
      300: '#fff176',
      400: '#ffee58',
      500: '#ffeb3b', // default gold
      600: '#fdd835',
      700: '#fbc02d',
      800: '#f9a825',
      900: '#f57f17',
    },
    // Adding black and white
    black: '#000000',
    white: '#ffffff',
    // Adding light peach/beige color
    peach: {
      50: '#fff5e6',
      100: '#ffebcc',
      200: '#ffe0b3',
      300: '#ffd699',
      400: '#ffcc80',
      500: '#ffc266', // default peach
      600: '#ffb84d',
      700: '#ffad33',
      800: '#ffa31a',
      900: '#ff9900',
    },
  },
};

const theme = extendTheme({ colors });

export default theme;
