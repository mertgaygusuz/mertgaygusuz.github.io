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
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-background/90 border-b border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 hero-gradient flex items-center justify-center rounded-xl">
            <span className="font-black text-on-primary-fixed text-xl">M</span>
          </div>
          <span className="font-label font-bold tracking-tighter text-xl uppercase text-on-surface">Gaygusuz</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#work" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.projects}</a>
          <a href="#experience" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.experience}</a>
          <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.skills}</a>

          {/* Lang toggle */}
          <div className="flex items-center gap-1 font-label text-xs">
            <button
              onClick={() => setLang('tr')}
              className={`px-2 py-1 transition-colors ${lang === 'tr' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >TR</button>
            <span className="text-outline-variant">|</span>
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >EN</button>
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-on-surface-variant hover:text-primary cursor-pointer transition-all duration-300"
              aria-label="Toggle theme"
            >
              <span className="material-symbols-outlined text-xl leading-none">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          )}

          <a
            href="#contact"
            className="hero-gradient px-6 py-2 rounded-lg font-label font-bold text-on-primary-fixed text-sm"
          >
            {t.nav.contact}
          </a>
        </nav>

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
        <div className="md:hidden bg-background/97 backdrop-blur-xl border-t border-outline-variant/20 px-6 py-6 flex flex-col gap-1">
          {[
            { href: '#work', label: t.nav.projects },
            { href: '#experience', label: t.nav.experience },
            { href: '#skills', label: t.nav.skills },
            { href: '#contact', label: t.nav.contact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-on-surface-variant hover:text-primary font-label text-sm uppercase tracking-widest py-3 border-b border-outline-variant/20 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="flex items-center justify-between pt-4 mt-1">
            <div className="flex items-center gap-1 font-label text-xs">
              <button onClick={() => setLang('tr')} className={`px-2 py-1 transition-colors ${lang === 'tr' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>TR</button>
              <span className="text-outline-variant">|</span>
              <button onClick={() => setLang('en')} className={`px-2 py-1 transition-colors ${lang === 'en' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>EN</button>
            </div>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors"
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
    </header>
  )
}
