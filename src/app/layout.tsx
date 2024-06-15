// app/layout.tsx
"use client"

import { ChakraThemedProvider } from './providers/ChakraThemedProvider'
import {UserProvider} from './context/UserContext'
import client from '../lib/apolloClient';

import Header from './components/Header'
import { ApolloProvider } from '@apollo/client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraThemedProvider>
        <ApolloProvider client={client}>
          <UserProvider>    
                  <Header/>
                  {children}
          </UserProvider>
        </ApolloProvider>
        </ChakraThemedProvider>
      </body>
    </html>
  )
}