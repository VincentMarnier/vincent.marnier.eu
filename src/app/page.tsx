"use client"

import LayoutClient from "./[lang]/layout_client"
import Page from "./[lang]/page"

export default function Home() {
  return <html lang="en">
    <LayoutClient languageCode="en">
      <Page />
    </LayoutClient>
  </html>
}
