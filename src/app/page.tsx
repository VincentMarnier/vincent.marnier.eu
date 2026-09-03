"use client"

import * as React from 'react'
import { Box, Paper, Skeleton, Stack, useTheme } from "@mui/material";
import LayoutClient from "./[lang]/layout_client"
import Page from "./[lang]/page"
import { LanguageCode } from "./[lang]/language"

const drawerWidth = {xs: 240, md: 280};

function detectLanguage(navigatorLanguages: readonly string[] | undefined): LanguageCode {
  const prefs = navigatorLanguages && navigatorLanguages.length > 0 ? navigatorLanguages : ['en']
  for (const lang of prefs) {
    const primary = lang.split('-')[0].toLowerCase()
    if (primary === 'fr') return 'fr'
  }
  return 'en'
}

function subscribe() {
  return () => {}
}

function getSnapshot(): LanguageCode | null {
  return typeof navigator !== 'undefined' ? detectLanguage(navigator.languages) : null
}

function ResumeSkeleton() {
  const theme = useTheme()
  return (
    <Stack direction="row" component="main" sx={{m:0}}>
      <Paper
        square
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          boxSizing: 'border-box',
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          py: 3,
          px: 2,
          minHeight: "100vh",
        }}
      >
        <Stack direction="column" sx={{gap: 3, alignItems: "center"}}>
          <Skeleton variant="circular" width={160} height={160} />
          <Box sx={{width: "100%"}}>
            <Skeleton variant="text" width="80%" sx={{mb: 1}} />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Stack>
      </Paper>
      <Stack direction="column" sx={{flex: 1, pt: 4, px: 2, gap: 3}}>
        <Box sx={{alignSelf: "center", textAlign: "center", width: "60%"}}>
          <Skeleton variant="text" sx={{fontSize: '2.5rem', mb: 1}} />
          <Skeleton variant="text" sx={{fontSize: '1.5rem', width: "50%", mx: "auto"}} />
        </Box>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width="90%" />
      </Stack>
    </Stack>
  )
}

export default function Home() {
  const lang = React.useSyncExternalStore<LanguageCode | null>(
    subscribe,
    getSnapshot,
    () => null,
  )

  return (
    <html lang={lang ?? 'en'}>
      <LayoutClient languageCode={lang ?? 'en'}>
        {lang ? <Page lang={lang} /> : <ResumeSkeleton />}
      </LayoutClient>
    </html>
  )
}
