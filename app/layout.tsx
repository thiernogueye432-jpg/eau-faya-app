import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'EAU FAYA — La Pureté Naturelle du Sénégal',
  description:
    "EAU FAYA produit et distribue une eau pure, saine et accessible au Sénégal. Eau purifiée par osmose inverse et désinfection UV & Ozone, conforme aux normes OMS & SONES. Sachets, bouteilles, bidons et bonbonnes 19 L.",
  generator: 'v0.app',
  applicationName: 'EAU FAYA',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'EAU FAYA',
  },
  icons: {
    icon: [
      { url: '/icons/app-icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/icons/app-icon-512.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d4ed8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`light ${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
