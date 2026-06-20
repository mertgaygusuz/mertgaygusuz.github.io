'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

export function Skills() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="px-6 py-24 md:py-28" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <SectionLabel num="02" label={isEn ? 'The Stack' : 'Teknolojiler'} />
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            {isEn ? 'Tools I build with' : 'Kullandığım araçlar'}
          </h2>
        </div>

        <div className="border-y border-outline-variant/15">
          {t.skills.groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-3 border-t border-outline-variant/15 py-5 first:border-t-0 md:grid-cols-[190px_1fr] md:gap-8"
            >
              <div className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant md:pt-1.5">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="text-base font-medium text-on-surface transition-colors hover:text-primary md:text-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
