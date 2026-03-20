'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Lang, Translations } from '@/lib/translations'

interface LanguageContextType {
  lang: Lang
  t: Translations
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
