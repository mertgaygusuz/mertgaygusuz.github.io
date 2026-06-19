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
          <div className="lg:col-span-7 max-w-4xl">
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

          {/* Right: SwiftUI code study */}
          <div className="lg:col-span-5 relative hidden lg:flex min-h-[450px] items-center justify-center">
            <div
              className="absolute h-[420px] w-[420px] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(255, 110, 42, .16), rgba(255, 110, 42, .04) 48%, transparent 72%)' }}
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-sheen relative w-full max-w-[430px] overflow-hidden rounded-[1.75rem]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.07] bg-black/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant/80">
                  <span className="grid h-5 w-5 place-items-center rounded-md bg-primary/15 font-mono text-[0.6rem] font-bold text-primary">S</span>
                  <span className="font-mono text-[0.68rem]">VibeRadarView.swift</span>
                </div>
              </div>

              <div className="bg-[#0d0c10]/75 py-5 font-mono text-[0.76rem] leading-7 text-[#d7cdc2]">
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">1</span><p><span className="text-[#d493ff]">struct</span> <span className="text-[#ffad72]">VibeRadarView</span>: <span className="text-[#d493ff]">View</span> {'{'}</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">2</span><p className="pl-5"><span className="text-[#d493ff]">@State</span> <span className="text-[#d493ff]">private</span> <span>var</span> vibes: [<span className="text-[#ffad72]">Vibe</span>] = []</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">3</span><p>&nbsp;</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">4</span><p className="pl-5"><span className="text-[#d493ff]">var</span> body: <span className="text-[#d493ff]">some</span> <span className="text-[#d493ff]">View</span> {'{'}</p></div>
                <div className="flex border-l-2 border-primary/70 bg-primary/[0.05]"><span className="w-11 shrink-0 pr-4 text-right text-white/20">5</span><p className="pl-5"><span className="text-[#ffad72]">ZStack</span> {'{'}</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">6</span><p className="pl-10"><span className="text-[#ffad72]">AmbientBackground</span>()</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">7</span><p className="pl-10"><span className="text-[#ffad72]">ExploreFeed</span>(vibes: vibes)</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">8</span><p className="pl-5">{'}'}</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">9</span><p className="pl-5"><span className="text-[#d493ff]">.task</span> {'{'} <span className="text-[#d493ff]">await</span> loadVibes() {'}'}</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">10</span><p>{'}'}</p></div>
                <div className="flex"><span className="w-11 shrink-0 pr-4 text-right text-white/20">11</span><p>{'}'}</p></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
