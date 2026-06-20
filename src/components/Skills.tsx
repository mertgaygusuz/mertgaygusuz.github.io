'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

export function Skills() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'
  const columns = [
    {
      number: '01',
      title: isEn ? 'Mobile & product' : 'Mobil & ürün',
      groups: [t.skills.groups[0], t.skills.groups[4]],
    },
    {
      number: '02',
      title: isEn ? 'Systems' : 'Sistemler',
      groups: [t.skills.groups[1], t.skills.groups[2], t.skills.groups[3], t.skills.groups[5]],
    },
    {
      number: '03',
      title: isEn ? 'AI & workflow' : 'Yapay zeka & iş akışı',
      groups: [t.skills.groups[6]],
    },
  ]

  return (
    <section className="relative overflow-hidden bg-surface-container-lowest px-6 py-24 md:py-28" id="skills">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionLabel num="02" label={isEn ? 'The Stack' : 'Teknolojiler'} />
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              {isEn ? 'Tools I build with' : 'Kullandığım araçlar'}
            </h2>
            <p className="mt-3 max-w-xl text-on-surface-variant">
              {isEn ? 'A product-focused stack across native mobile, reliable systems, and AI tooling.' : 'Native mobil, güvenilir sistemler ve yapay zeka araçlarıyla ürün odaklı bir teknik stack.'}
            </p>
          </div>
        </div>

        <div className="grid gap-10 border-t border-outline-variant/20 pt-7 lg:grid-cols-3 lg:gap-8">
          {columns.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border-l border-outline-variant/20 pl-5 lg:pl-6"
            >
              <div className="mb-7 flex items-baseline gap-3">
                <span className="font-label text-[0.65rem] font-bold tracking-[0.22em] text-primary">{column.number}</span>
                <h3 className="text-xl font-bold">{column.title}</h3>
              </div>
              <div className="space-y-6">
                {column.groups.map(group => (
                  <div key={group.label}>
                    <p className="mb-2.5 font-label text-[0.65rem] font-bold uppercase tracking-[0.18em] text-on-surface-variant">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {group.items.map(item => (
                        <span key={item} className="text-[0.95rem] font-medium text-on-surface transition-colors hover:text-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
