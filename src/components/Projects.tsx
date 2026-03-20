'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const PROJECT_META = [
  { tags: 'UIKit / TheMovieDB / MVVM', gradient: 'from-[#1a1a2e] to-[#0d0d14]' },
  { tags: 'SwiftUI / Alamofire / MVC', gradient: 'from-[#0d1117] to-[#14141f]' },
  { tags: '.NET / MongoDB / REST', gradient: 'from-[#0f1923] to-[#0d1117]' },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="py-32 px-8 md:px-24 bg-surface-container-low" id="work">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">
            05 / SELECTED WORKS
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface">
            {t.projects.title === 'Personal Projects' ? 'Digital Builds' : 'Projeler'}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative aspect-[4/5] overflow-hidden bg-gradient-to-b ${PROJECT_META[i].gradient} rounded-xl cursor-pointer`}
            >
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(198,198,206,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(198,198,206,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-end">
                  <div className="max-w-[80%]">
                    <p className="text-tertiary font-label text-[10px] uppercase tracking-[0.2em] mb-2">
                      {PROJECT_META[i].tags}
                    </p>
                    <h3 className="text-2xl font-headline font-bold text-on-surface leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.bullets[0]}
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors shrink-0 ml-4">
                    <span className="material-symbols-outlined text-on-surface text-xl">open_in_new</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
