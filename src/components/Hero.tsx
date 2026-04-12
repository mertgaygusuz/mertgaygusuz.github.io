'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

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
              <h1 className="font-headline font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                <span className="block">MERT</span>
                <span className="text-primary italic">GAYGUSUZ</span>
              </h1>

              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10">
                  {t.hero.bio.split('React Native')[0]}
                  <span className="text-secondary font-bold">React Native</span>
                  {t.hero.bio.split('React Native')[1]?.split('.')[0]}.
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
                <div className="space-y-1 opacity-70">
                  <div><span className="text-secondary">import</span> <span className="text-primary">React</span> <span className="text-on-surface-variant">from</span> <span className="text-secondary">&apos;react&apos;</span></div>
                  <div><span className="text-secondary">import</span> <span className="text-on-surface-variant">{'{'}</span> <span className="text-primary">View, Text</span> <span className="text-on-surface-variant">{'}'}</span> <span className="text-secondary">from</span> <span className="text-secondary">&apos;react-native&apos;</span></div>
                  <div className="mt-3"><span className="text-secondary">const</span> <span className="text-primary">App</span> <span className="text-on-surface-variant">= () =&gt;</span> <span className="text-on-surface-variant">{'{'}</span></div>
                  <div className="ml-4"><span className="text-secondary">return</span> <span className="text-on-surface-variant">{'('}</span></div>
                  <div className="ml-8"><span className="text-outline">&lt;</span><span className="text-primary">View</span></div>
                  <div className="ml-10 text-outline">style={'{'}styles.container{'}'}</div>
                  <div className="ml-8"><span className="text-outline">&gt;</span></div>
                  <div className="ml-10"><span className="text-outline">&lt;</span><span className="text-primary">Text</span><span className="text-outline">&gt;</span></div>
                  <div className="ml-12 text-secondary">Hello, World!</div>
                  <div className="ml-10"><span className="text-outline">&lt;/</span><span className="text-primary">Text</span><span className="text-outline">&gt;</span></div>
                  <div className="ml-8"><span className="text-outline">&lt;/</span><span className="text-primary">View</span><span className="text-outline">&gt;</span></div>
                  <div className="ml-4"><span className="text-on-surface-variant">{')'}</span></div>
                  <div><span className="text-on-surface-variant">{'}'}</span></div>
                  <div className="mt-3 text-on-surface-variant opacity-50">{'// Swift'}</div>
                  <div><span className="text-secondary">import</span> <span className="text-primary">SwiftUI</span></div>
                  <div className="mt-1"><span className="text-secondary">struct</span> <span className="text-primary">ContentView</span><span className="text-on-surface-variant">: View {'{'}</span></div>
                  <div className="ml-4"><span className="text-secondary">var</span> body<span className="text-on-surface-variant">: some View {'{'}</span></div>
                  <div className="ml-8"><span className="text-primary">Text</span><span className="text-on-surface-variant">(</span><span className="text-secondary">&quot;Hello&quot;</span><span className="text-on-surface-variant">)</span></div>
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
