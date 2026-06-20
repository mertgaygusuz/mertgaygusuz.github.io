'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

type ProjectMeta = {
  tags: string[]
  color: 'primary' | 'secondary'
  gradient: string
  icon: string
  image?: string
  appStore?: boolean
  github?: string
}

const PROJECT_META: ProjectMeta[] = [
  {
    tags: ['SwiftUI', 'SignalR', 'ASP.NET Core'],
    color: 'primary',
    gradient: 'from-[#1a1410] to-[#0d0a07]',
    icon: 'graphic_eq',
    image: '/projects/zynkra.png',
    appStore: true,
  },
  {
    tags: ['SwiftUI', 'Firebase', 'MVVM'],
    color: 'primary',
    gradient: 'from-[#241a12] to-[#140e09]',
    icon: 'forum',
    image: '/projects/blip.png',
    appStore: true,
  },
  {
    tags: ['.NET 10', 'Next.js 15', 'PostgreSQL'],
    color: 'secondary',
    gradient: 'from-[#1f1812] to-[#120d09]',
    icon: 'newspaper',
    github: 'https://github.com/mertgaygusuz/NewsFlow',
  },
  {
    tags: ['Python', 'LangChain', 'Gemini'],
    color: 'secondary',
    gradient: 'from-[#1a140e] to-[#0e0a07]',
    icon: 'api',
    github: 'https://github.com/mertgaygusuz/nl2sql-agent',
  },
  {
    tags: ['SwiftUI', 'SwiftData', 'Charts'],
    color: 'primary',
    gradient: 'from-[#161310] to-[#0a0807]',
    icon: 'receipt_long',
    image: '/projects/focusReceipt.png',
    appStore: true,
  },
  {
    tags: ['SwiftUI', 'SwiftData', 'MVVM'],
    color: 'primary',
    gradient: 'from-[#24201a] to-[#16120d]',
    icon: 'edit_note',
    image: '/projects/jotly.png',
    appStore: true,
  },
]

function AppleGlyph() {
  return (
    <svg viewBox="0 0 384 512" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

export function Projects() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="bg-surface-container py-32 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <SectionLabel num="01" label={isEn ? 'Selected Work' : 'Seçili Projeler'} />
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            {isEn ? 'Things I’ve shipped' : 'Geliştirdiklerim'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.items.map((project, i) => {
            const meta = PROJECT_META[i]
            const colorClass = meta.color === 'primary' ? 'hover:border-primary' : 'hover:border-secondary'
            const tagBg = meta.color === 'primary' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
            const linkColor = meta.color === 'primary' ? 'text-primary' : 'text-secondary'

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className={`group bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/10 ${colorClass}`}
              >
                {/* Visual header */}
                <div className={`aspect-video bg-gradient-to-br ${meta.gradient} overflow-hidden relative flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                  {meta.image ? (
                    <div className="relative transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                      <div className="absolute -inset-6 rounded-full bg-primary/20 blur-2xl" />
                      <Image
                        src={meta.image}
                        alt={`${project.title} app icon`}
                        width={120}
                        height={120}
                        className="relative w-24 h-24 md:w-28 md:h-28 rounded-[1.4rem] shadow-2xl ring-1 ring-white/10"
                      />
                    </div>
                  ) : (
                    <span className="font-headline text-[7rem] font-extrabold leading-none text-white/10 transition-transform duration-500 group-hover:scale-110">
                      {project.title.charAt(0)}
                    </span>
                  )}

                  {/* Tag badges + App Store marker share one wrapping row */}
                  <div className="absolute top-5 left-5 right-5 flex flex-wrap items-start gap-2">
                    {meta.tags.map(tag => (
                      <span key={tag} className={`backdrop-blur-md px-3 py-1 rounded-full text-[0.65rem] font-bold font-label uppercase whitespace-nowrap ${tagBg}`}>
                        {tag}
                      </span>
                    ))}
                    {meta.appStore && (
                      <div className="ml-auto flex items-center gap-1.5 bg-white/10 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-[0.65rem] font-bold font-label uppercase tracking-wider whitespace-nowrap">
                        <AppleGlyph />
                        App Store
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                    {project.bullets[0]}
                  </p>
                  {meta.github ? (
                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all ${linkColor}`}
                    >
                      {isEn ? 'Explore Project' : 'Projeyi İncele'}
                      <span>↗</span>
                    </a>
                  ) : meta.appStore ? (
                    <span className={`inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm ${linkColor}`}>
                      <AppleGlyph />
                      {isEn ? 'Live on the App Store' : "App Store'da Yayında"}
                    </span>
                  ) : null}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
