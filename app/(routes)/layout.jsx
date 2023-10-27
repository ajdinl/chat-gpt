import { Inter } from 'next/font/google'
import '@app/globals.css'
import { Providers } from '../providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ChatGPT',
  description: 'ChatGPT created by Ajdin Lojic',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
