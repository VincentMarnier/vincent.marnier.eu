import * as React from 'react'
import { Metadata } from 'next'
import LayoutClient from './layout_client'
import { ALL_LANGUAGES_CODE, LanguageCode } from './language'

type ParamsProps = { lang: LanguageCode }

export async function generateStaticParams() {
  return ALL_LANGUAGES_CODE.map((lc) => ({ lang: lc }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ParamsProps>
}): Promise<Metadata> {
  const { lang } = await params

  const title = "Vincent Marnier"
  let description: string
  switch (lang) {
    case 'fr':
      description = "Vincent Marnier: CV"
      break
    default:
      description = "Vincent Marnier's resume"
      break
  }

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: `/en`,
        fr: `/fr`,
        'x-defaults': `/en`,
      },
    }
  }
}

export default function Layout({
  params,
  children,
}: Readonly<{
  params: Promise<ParamsProps>
  children: React.ReactNode
}>) {
  const { lang } = React.use(params)

  return (
    <html lang={lang}>
      <LayoutClient languageCode={lang}>{children}</LayoutClient>
    </html>
  )
}
