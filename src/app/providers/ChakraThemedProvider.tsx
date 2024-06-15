// app/chakraProvider.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../theme/chakraTheme'

export function ChakraThemedProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}