'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t, lang } = useLanguage()
  const cvHref = `/cv/MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`

  return (
    <section className="relative pt-40 pb-16 md:pt-56 md:pb-28 px-6" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 items-center">

          {/* Left: Text */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pill mb-7">
                <span className="glow-dot" />
                <span className="font-label text-primary uppercase tracking-[0.18em] text-[0.7rem] font-bold">
                  Full-Stack Mobile Developer · iOS · React Native · .NET
                </span>
              </div>

              <h1 className="font-headline font-black text-6xl md:text-7xl lg:text-[6.75rem] leading-[0.9] tracking-tight mb-8">
                <span className="block text-heading">MERT</span>
                <span className="text-primary italic">GAYGUSUZ</span>
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10">
                  {t.hero.role}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="btn-glow px-8 py-4 rounded-full font-black text-lg flex items-center gap-2 group"
                  >
                    {t.nav.projects}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a
                    href="#contact"
                    className="btn-ghost px-8 py-4 rounded-full text-on-surface font-black text-lg"
                  >
                    {t.nav.contact}
                  </a>
                  <a
                    href={cvHref}
                    download={`MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`}
                    className="btn-ghost px-8 py-4 rounded-full text-on-surface font-black text-lg flex items-center gap-2 group"
                  >
                    {t.nav.downloadCv}
                    <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
