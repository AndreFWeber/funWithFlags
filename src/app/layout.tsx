// app/layout.tsx
import { ChakraThemedProvider } from './providers/ChakraThemedProvider'
import {UserProvider} from './context/UserContext'
import Header from './components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <ChakraThemedProvider>
          <UserProvider>
              <Header/>
              {children}
          </UserProvider>
        </ChakraThemedProvider>
      </body>
    </html>
  )
}