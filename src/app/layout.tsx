import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

const SITE_URL = 'https://mertgaygusuz.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Mert Gaygusuz — Full-Stack Developer (React Native & iOS & .NET)',
  description:
    'Full-Stack Developer specializing in React Native and native iOS (Swift/SwiftUI), rooted in 2+ years of .NET back-end. Independent developer of 4 iOS apps published on the App Store.',
  keywords: [
    'Mert Gaygusuz',
    'Full-Stack Developer',
    'React Native',
    'iOS',
    'Swift',
    'SwiftUI',
    '.NET',
    'C#',
    'Mobile Developer',
    'Istanbul',
  ],
  authors: [{ name: 'Mert Gaygusuz', url: SITE_URL }],
  creator: 'Mert Gaygusuz',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Mert Gaygusuz',
    title: 'Mert Gaygusuz — Full-Stack Developer (React Native & iOS & .NET)',
    description:
      'React Native & native iOS developer with a .NET back-end foundation. 4 iOS apps live on the App Store.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Mert Gaygusuz — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Gaygusuz — Full-Stack Developer (React Native & iOS & .NET)',
    description:
      'React Native & native iOS developer with a .NET back-end foundation. 4 iOS apps live on the App Store.',
    images: ['/og.png'],
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mert Gaygusuz',
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  jobTitle: 'Full-Stack Mobile Developer',
  email: 'mailto:mertgaygusuz@hotmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Istanbul',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://github.com/mertgaygusuz',
    'https://linkedin.com/in/mertgaygusuz',
  ],
  knowsAbout: [
    'React Native',
    'iOS',
    'Swift',
    'SwiftUI',
    '.NET',
    'C#',
    'SignalR',
    'PostgreSQL',
    'LangChain',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
