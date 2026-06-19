'use client'

import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'

export function Navbar() {
  const { lang, t, setLang } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const cvHref = `/cv/MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`
  const cvFile = `MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`

  return (
    <header className="fixed top-0 z-50 w-full glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 hero-gradient flex items-center justify-center rounded-xl">
            <span className="font-black text-[#241008] text-xl">M</span>
          </div>
          <span className="font-label font-bold tracking-tighter text-xl uppercase text-heading">Gaygusuz</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          <a href="#work" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.projects}</a>
          <a href="#experience" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.experience}</a>
          <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest">{t.nav.skills}</a>
          <a href={cvHref} download={cvFile} className="text-on-surface-variant hover:text-primary transition-colors font-label text-sm uppercase tracking-widest flex items-center gap-1.5">
            {t.nav.resume}
            <span className="material-symbols-outlined text-base leading-none">download</span>
          </a>

          {/* Lang toggle */}
          <div className="flex items-center gap-1 font-label text-xs rounded-full border border-outline-variant/40 bg-white/5 p-1">
            <button
              onClick={() => setLang('tr')}
              className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'tr' ? 'hero-gradient text-[#241008] font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >TR</button>
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full transition-colors ${lang === 'en' ? 'hero-gradient text-[#241008] font-bold' : 'text-on-surface-variant hover:text-on-surface'}`}
            >EN</button>
          </div>

          <a
            href="#contact"
            className="btn-glow px-6 py-2 rounded-full font-label font-bold text-sm"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-outline-variant/20 px-6 py-6 flex flex-col gap-1">
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

          <a
            href={cvHref}
            download={cvFile}
            onClick={() => setMobileOpen(false)}
            className="text-primary font-label text-sm uppercase tracking-widest py-3 border-b border-outline-variant/20 flex items-center gap-2"
          >
            {t.nav.downloadCv}
            <span className="material-symbols-outlined text-base leading-none">download</span>
          </a>

          <div className="flex items-center gap-1 font-label text-xs pt-4 mt-1">
            <button onClick={() => setLang('tr')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'tr' ? 'hero-gradient text-[#241008] font-bold' : 'text-on-surface-variant'}`}>TR</button>
            <button onClick={() => setLang('en')} className={`px-3 py-1.5 rounded-full transition-colors ${lang === 'en' ? 'hero-gradient text-[#241008] font-bold' : 'text-on-surface-variant'}`}>EN</button>
          </div>
        </div>
      )}
    </header>
  )
}
