'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden pt-24 pb-16" id="hero">
      {/* Ambient glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-tertiary mb-6">
            00 / INTRODUCTION
          </p>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-on-surface leading-[1.1] mb-6 md:mb-8">
            {t.hero.title} &mdash;{' '}
            <span className="text-primary-dim">{t.hero.role}</span>
          </h1>

          <p className="font-body text-base md:text-xl text-on-surface-variant max-w-3xl leading-relaxed mb-10 md:mb-12">
            {t.hero.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="px-8 py-4 border border-primary text-primary font-label text-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 text-center"
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-outline-variant/30 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:border-tertiary hover:text-tertiary transition-all duration-500 text-center"
            >
              {t.contact.title}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
