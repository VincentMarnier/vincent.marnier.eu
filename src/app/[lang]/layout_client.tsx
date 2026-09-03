'use client'

import * as React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'
import { Inter } from "next/font/google";
import en from '@/data/en'
import fr from '@/data/fr'
import { LanguageCode } from './language';
import themeData from './theme';
import { LanguageContext } from './LanguageContext';

const inter = Inter({ subsets: ['latin'] })

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
    <body className={inter.className} style={{margin: 0}}>
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={languageData}>
          {children}
        </LanguageContext.Provider>
      </ThemeProvider>
    </body>
  )
}
