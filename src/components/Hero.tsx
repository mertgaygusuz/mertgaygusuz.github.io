'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t, lang } = useLanguage()
  const cvHref = `/cv/MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`

  return (
    <section className="relative pt-40 pb-20 md:pt-60 md:pb-40 px-6" id="hero">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-label text-secondary uppercase tracking-[0.25em] text-sm mb-6">
                Full-Stack Mobile Developer · iOS · React Native · .NET
              </p>

              <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8">
                <span className="block">MERT</span>
                <span className="text-primary italic">GAYGUSUZ</span>
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10">
                  {t.hero.role}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className="hero-gradient px-8 py-4 rounded-xl text-on-primary-fixed font-black text-lg flex items-center gap-2 group"
                  >
                    {t.nav.projects}
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </a>
                  <a
                    href="#contact"
                    className="bg-surface-container-high px-8 py-4 rounded-xl text-on-surface font-black text-lg border border-outline-variant/20 hover:bg-surface-bright transition-colors"
                  >
                    {t.nav.contact}
                  </a>
                  <a
                    href={cvHref}
                    download={`MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`}
                    className="px-8 py-4 rounded-xl text-on-surface font-black text-lg border border-primary/40 hover:bg-primary/10 transition-colors flex items-center gap-2 group"
                  >
                    {t.nav.downloadCv}
                    <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">download</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Decorative panel */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-surface-container border border-outline-variant/30 shadow-2xl"
            >
              {/* Code-like decorative content */}
              <div className="w-full h-full bg-gradient-to-br from-surface-container to-surface-container-highest p-6 font-mono text-xs leading-relaxed overflow-hidden">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="space-y-1 opacity-80">
                  <div><span className="text-secondary">import</span> <span className="text-primary">SwiftUI</span></div>
                  <div className="mt-3"><span className="text-secondary">struct</span> <span className="text-primary">VibeRadarView</span><span className="text-on-surface-variant">: </span><span className="text-primary">View</span> <span className="text-on-surface-variant">{'{'}</span></div>
                  <div className="ml-4"><span className="text-secondary">@State</span> <span className="text-secondary">private</span> <span className="text-secondary">var</span> <span className="text-on-surface-variant">isLive = </span><span className="text-secondary">true</span></div>
                  <div className="ml-4 mt-2"><span className="text-secondary">var</span> <span className="text-on-surface-variant">body: </span><span className="text-secondary">some</span> <span className="text-primary">View</span> <span className="text-on-surface-variant">{'{'}</span></div>
                  <div className="ml-8"><span className="text-primary">VStack</span><span className="text-on-surface-variant">(spacing: </span><span className="text-secondary">16</span><span className="text-on-surface-variant">) {'{'}</span></div>
                  <div className="ml-12"><span className="text-primary">Text</span><span className="text-on-surface-variant">(</span><span className="text-secondary">&quot;Vibe Radar&quot;</span><span className="text-on-surface-variant">)</span></div>
                  <div className="ml-16 text-on-surface-variant">.font(<span className="text-primary">.title</span>.bold())</div>
                  <div className="ml-12"><span className="text-primary">Toggle</span><span className="text-on-surface-variant">(</span><span className="text-secondary">&quot;Live&quot;</span><span className="text-on-surface-variant">, isOn: $isLive)</span></div>
                  <div className="ml-8"><span className="text-on-surface-variant">{'}'}</span></div>
                  <div className="ml-8 text-on-surface-variant">.padding()</div>
                  <div className="ml-8 text-on-surface-variant">.task {'{'} <span className="text-secondary">await</span> loadVibes() {'}'}</div>
                  <div className="ml-4"><span className="text-on-surface-variant">{'}'}</span></div>
                  <div><span className="text-on-surface-variant">{'}'}</span></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl text-on-secondary shadow-xl -rotate-6"
            >
              <span className="font-label font-bold text-2xl tracking-tighter">iOS &amp; RN</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
