import * as meta from './meta-static'
import { Metadata } from 'next'

const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  generator: meta.title,
  applicationName: meta.title,
  keywords: meta.keywords,
  category: 'technology',

  themeColor: 'light',
  colorScheme: 'light',

  authors: [
    { name: 'Nazmus Sayad', url: 'https://nazmussayad.com' },
    { name: 'Kazi Tanvirul Islam Sakib', url: 'https://github.com/ktisakib' },
  ],

  openGraph: {
    emails: meta.email,
    url: meta.url,
    type: 'website',
    locale: 'en_US',
    title: meta.title,
    siteName: meta.title,
    description: meta.description,
    images: [
      {
        url: meta.icon,
        alt: 'WDHive logo',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: meta.icon,
    shortcut: meta.icon,
    apple: meta.icon,
    other: {
      rel: meta.icon,
      url: meta.icon,
    },
  },

  // twitter: {
  //   card: 'summary_large_image',
  //   title: meta.title,
  //   description: meta.description,
  //   siteId: '1467726470533754880',
  //   creator: '@nextjs',
  //   creatorId: '1467726470533754880',
  //   images: [meta.icon],
  // },

  verification: {
    google: [
      'TFL9QPX9TV_hJJVYysSRNVTBdLv9Fzx75Z_pzVJgX1o',
      'Nwt9452f65MBGlNf9wRGIL9on4ErafTZ5-GbnERwP7A',
    ],
  },

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default metadata
