import { defineStyleConfig } from '@chakra-ui/react'

const baseStyle = {
  dialog: {
    bg: 'radial-gradient(circle, rgb(0 2 11) 0%, rgb(50 48 48) 100%)',
    color: 'white',
    borderRadius: 'md',
    boxShadow: 'lg',
    p: 4,
  },
}

const modalTheme = defineStyleConfig({ baseStyle })

export default modalTheme