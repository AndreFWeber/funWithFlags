// src/theme/theme.ts
import { extendTheme } from '@chakra-ui/react';
import modalTheme from './modal'
import containerTheme from './container';

const customTheme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'radial-gradient(circle, rgb(0 2 11) 0%, rgb(50 48 48) 100%)',
        color: 'blue.900'
      }
    })
  },
  components: {
    Modal: modalTheme,
    Container: containerTheme
  },
});

export default customTheme;
