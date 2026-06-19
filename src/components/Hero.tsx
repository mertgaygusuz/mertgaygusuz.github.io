'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t, lang } = useLanguage()
  const cvHref = `/cv/MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`

  return (
    <section className="relative pt-40 pb-16 md:pt-56 md:pb-28 px-6" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="pill mb-7">
                <span className="glow-dot" />
                <span className="font-label text-primary uppercase tracking-[0.18em] text-[0.7rem] font-bold">
                  Full-Stack Developer · iOS &amp; React Native &amp; .NET
                </span>
              </div>

              <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
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

          {/* Right: Vibe radar stage */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center min-h-[420px]">
            {/* ambient glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-white/[0.07]"
                 style={{ background: 'radial-gradient(circle at 50% 42%, rgba(255,167,91,.16), rgba(255,98,20,.07) 32%, transparent 67%)', boxShadow: 'inset 0 0 80px rgba(255,135,53,.06), 0 0 110px rgba(255,101,27,.12)' }} />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[360px] h-[360px] flex items-center justify-center"
            >
              {/* concentric radar rings */}
              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/[0.06]" />
              <div className="absolute w-[230px] h-[230px] rounded-full border border-white/[0.08]" />
              <div className="absolute w-[130px] h-[130px] rounded-full border border-primary/20" />

              {/* sweeping arc */}
              <motion.div
                className="absolute w-[340px] h-[340px] rounded-full"
                style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,138,61,.18) 40deg, transparent 90deg)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* center orb */}
              <div className="icon-orb w-20 h-20 rounded-2xl relative z-10">
                <span className="material-symbols-outlined text-4xl">graphic_eq</span>
              </div>

              {/* floating now-playing glass chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass glass-sheen absolute -bottom-2 -right-2 z-20 flex items-center gap-3 px-3.5 py-3 rounded-2xl w-[230px]"
              >
                <div className="icon-orb w-10 h-10 rounded-xl shrink-0">
                  <span className="material-symbols-outlined text-lg">terminal</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-label text-[0.6rem] uppercase tracking-wider text-on-surface-variant truncate">Now Building</p>
                  <p className="font-bold text-sm text-heading truncate">React Native · Swift</p>
                </div>
                <div className="flex items-end gap-[3px] h-5">
                  {[7, 15, 10, 18].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-[2px] rounded bg-primary-container"
                      style={{ height: h }}
                      animate={{ scaleY: [0.5, 1, 0.6, 1] }}
                      transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
