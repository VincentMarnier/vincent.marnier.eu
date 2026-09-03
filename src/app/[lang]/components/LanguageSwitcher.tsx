'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Button, Stack } from '@mui/material'
import { LanguageCode } from '../language'

export default function LanguageSwitcher({ lang }: { lang?: LanguageCode }) {
  const pathname = usePathname()
  const currentLang = lang ?? (pathname.startsWith('/fr') ? 'fr' : 'en')

  return (
    <Box
      className="hide-in-pdf"
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 1300,
      }}
    >
      <Stack
        direction="row"
        sx={{
          bgcolor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          borderRadius: 50,
          border: '1px solid rgba(0,0,0,0.08)',
          overflow: 'hidden',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        {(['en', 'fr'] as const).map((lang) => (
          <Button
            key={lang}
            component={Link}
            href={`/${lang}`}
            size="small"
            sx={{
              minWidth: 0,
              px: 2,
              py: 0.75,
              fontSize: '0.8rem',
              fontWeight: currentLang === lang ? 700 : 400,
              color: currentLang === lang ? 'secondary.main' : 'text.secondary',
              textTransform: 'uppercase',
              borderRadius: 0,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.04)',
              },
            }}
          >
            {lang}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}
