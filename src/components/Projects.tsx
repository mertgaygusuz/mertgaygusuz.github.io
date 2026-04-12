'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const PROJECT_META = [
  {
    tags: ['UIKit', 'TMDB', 'MVVM'],
    color: 'primary',
    gradient: 'from-[#1a1a2e] to-[#0d0d1a]',
    icon: 'movie',
    github: 'https://github.com/mertgaygusuz/MoviesChallenge',
  },
  {
    tags: ['SwiftUI', 'Alamofire', 'MVC'],
    color: 'secondary',
    gradient: 'from-[#0d1117] to-[#0a1628]',
    icon: 'chat_bubble',
    github: 'https://github.com/mertgaygusuz/ChatGPTApp',
  },
  {
    tags: ['.NET', 'MongoDB', 'REST'],
    color: 'primary',
    gradient: 'from-[#0f1923] to-[#0d1117]',
    icon: 'api',
    github: 'https://github.com/mertgaygusuz/DotnetAndMongoDbCase',
  },
  {
    tags: ['Python', 'LangChain', 'Gemini'],
    color: 'secondary',
    gradient: 'from-[#0a1628] to-[#0d0d1a]',
    icon: 'smart_toy',
    github: 'https://github.com/mertgaygusuz/nl2sql-agent',
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="bg-surface-container py-32 px-6" id="work">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="font-label text-primary uppercase tracking-[0.3em] text-sm block mb-4">
            Portfolio Highlights
          </span>
          <h2 className="text-6xl font-black tracking-tighter">
            {t.projects.title === 'Personal Projects' ? 'Digital Builds' : 'Projeler'}
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
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group bg-surface-container-low rounded-[2rem] overflow-hidden border border-outline-variant/10 transition-all duration-300 ${colorClass}`}
              >
                {/* Visual header */}
                <div className={`aspect-video bg-gradient-to-br ${meta.gradient} overflow-hidden relative flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-8xl opacity-10 text-white">
                    {meta.icon}
                  </span>
                  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                  {/* Tag badges */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {meta.tags.map(tag => (
                      <span key={tag} className={`backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold font-label uppercase ${tagBg}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
                    {project.bullets[0]}
                  </p>
                  <a
                    href={meta.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all ${linkColor}`}
                  >
                    {t.projects.title === 'Personal Projects' ? 'Explore Project' : 'Projeyi İncele'}
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
