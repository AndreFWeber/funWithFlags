// src/theme/theme.ts
import { extendTheme } from '@chakra-ui/react';
import Modal from './modal'
import {mode} from "@chakra-ui/theme-tools";

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
    Modal
  },
});

export default customTheme;
