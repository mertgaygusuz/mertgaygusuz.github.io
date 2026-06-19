'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="px-6 pb-12 md:pb-20" aria-label="Highlights">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-outline-variant/15 py-5"
        >
          {t.stats.items.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 font-label text-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
