import * as React from 'react'
import * as en from '@/data/en'

export const LanguageContext = React.createContext(en);

export function useLocalizedData() {
  return React.useContext(LanguageContext)
}