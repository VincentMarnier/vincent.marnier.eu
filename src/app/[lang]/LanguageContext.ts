import * as React from 'react'
import { ResumeData } from '@/data/types'

export const LanguageContext = React.createContext<ResumeData | null>(null)

export function useLocalizedData(): ResumeData {
  const data = React.useContext(LanguageContext)
  if (!data) throw new Error('useLocalizedData must be used within a LanguageContext.Provider')
  return data
}
