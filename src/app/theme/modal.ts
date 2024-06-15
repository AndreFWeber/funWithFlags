import { defineStyleConfig } from '@chakra-ui/react'

const Modal = defineStyleConfig({
        baseStyle: {
          dialog: {
            bg: 'radial-gradient(circle, rgb(0 2 11) 0%, rgb(50 48 48) 100%)',
            color: 'white',
            borderRadius: 'md',
            boxShadow: 'lg',
            p: 4,
          },
        }
})

export default Modal