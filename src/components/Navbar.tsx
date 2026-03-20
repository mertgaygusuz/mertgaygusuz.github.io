'use client'

import { useTheme } from 'next-themes'
import { useLanguage } from '@/context/LanguageContext'
import { useState, useEffect } from 'react'

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { lang, t, setLang } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="text-sm font-bold tracking-widest text-on-surface uppercase font-headline">
          MERT GAYGUSUZ
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <a href="#work" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label text-sm">{t.nav.projects}</a>
          <a href="#skills" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label text-sm">{t.nav.skills}</a>
          <a href="#experience" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label text-sm">{t.nav.experience}</a>
          <a href="#contact" className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label text-sm">{t.nav.contact}</a>

          {/* Lang toggle */}
          <div className="flex items-center gap-1 font-label text-xs">
            <button
              onClick={() => setLang('tr')}
              className={`px-2 py-1 transition-colors ${lang === 'tr' ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >TR</button>
            <span className="text-outline-variant">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-on-surface' : 'text-on-surface-variant hover:text-on-surface'}`}
            >EN</button>
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-on-surface-variant hover:text-tertiary cursor-pointer transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-xl leading-none">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-on-surface-variant"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-primary">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-background/97 backdrop-blur-xl border-t border-outline-variant/30 px-8 py-6 flex flex-col gap-1">
          {[
            { href: '#work', label: t.nav.projects },
            { href: '#skills', label: t.nav.skills },
            { href: '#experience', label: t.nav.experience },
            { href: '#contact', label: t.nav.contact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-on-surface font-label text-sm uppercase tracking-widest py-3 border-b border-outline-variant/20 transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center justify-between pt-4 mt-1">
            <div className="flex items-center gap-1 font-label text-xs">
              <button onClick={() => setLang('tr')} className={`px-2 py-1 transition-colors ${lang === 'tr' ? 'text-on-surface font-bold' : 'text-on-surface-variant'}`}>TR</button>
              <span className="text-outline-variant">|</span>
              <button onClick={() => setLang('en')} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-on-surface font-bold' : 'text-on-surface-variant'}`}>EN</button>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-on-surface-variant hover:text-on-surface cursor-pointer transition-colors"
                aria-label="Toggle theme"
              >
                <span className="material-symbols-outlined text-xl leading-none">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
