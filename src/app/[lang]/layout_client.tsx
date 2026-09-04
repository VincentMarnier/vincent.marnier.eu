'use client'

import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { Noto_Sans } from "next/font/google";
import en from '@/data/en'
import fr from '@/data/fr'
import { LanguageCode } from './language';
import themeData from './theme';
import { LanguageContext } from './LanguageContext';

const notoSans = Noto_Sans({ weight: ['400', '500', '600', '700'], subsets: ['latin', 'latin-ext'], display: 'swap' })

export default function LayoutClient({
  languageCode,
  children,
}: Readonly<{
  languageCode: LanguageCode
  children: React.ReactNode
}>) {
  const languageData = React.useMemo(
    () => {
      switch (languageCode) {
        case "fr":
          return fr;
        default:
          return en;
      }
    },
    [languageCode],
  )

  const theme = createTheme(themeData)

  return (
    <body className={notoSans.className} style={{margin: 0}}>
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={languageData}>
          {children}
        </LanguageContext.Provider>
      </ThemeProvider>
    </body>
  )
}
