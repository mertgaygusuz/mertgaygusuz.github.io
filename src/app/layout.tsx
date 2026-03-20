import type { Metadata } from 'next'
import { Inter, Noto_Serif } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto-serif' })

export const metadata: Metadata = {
  title: 'Mert Gaygusuz — React Native & iOS Developer',
  description: 'React Native & iOS Developer | Mobile-first, backend-rooted.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
      </head>
      <body className={`${inter.variable} ${notoSerif.variable} font-body`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
