import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: '#1A3247',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://vincent.marnier.eu'),
  title: 'Vincent Marnier',
  description: "Vincent Marnier's resume",
  authors: { name: 'Vincent Marnier' },
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/en',
    languages: {
      en: '/en',
      fr: '/fr',
      'x-default': '/en',
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}