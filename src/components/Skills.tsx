'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const SKILLS = [
  { icon: 'smartphone',      label: 'React Native', sub: 'Cross-Platform', color: 'primary' },
  { icon: 'phone_iphone',    label: 'Swift & UI',   sub: 'Native iOS',     color: 'secondary' },
  { icon: 'code',            label: 'TypeScript',   sub: 'Architecture',   color: 'primary' },
  { icon: 'terminal',        label: '.NET Core',    sub: 'Backend',        color: 'secondary' },
  { icon: 'database',        label: 'MongoDB',      sub: 'Database',       color: 'primary' },
  { icon: 'palette',         label: 'UI/UX Design', sub: 'Interfaces',     color: 'secondary' },
]

export function Skills() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="bg-surface-container-low py-24 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="font-label text-primary uppercase tracking-[0.3em] text-sm block mb-4">
              {isEn ? 'Core Competencies' : 'Temel Yetkinlikler'}
            </span>
            <h2 className="text-5xl font-black tracking-tight">
              {isEn ? 'Technical Skills' : 'Teknik Yetenekler'}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-sm font-label">
            {isEn
              ? 'A diverse stack focused on building robust, scalable, and delightful mobile solutions.'
              : 'Güçlü, ölçeklenebilir ve etkileyici mobil çözümler üretmeye odaklanan geniş bir teknoloji yelpazesi.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group bg-surface-container p-8 rounded-3xl border border-outline-variant/10 transition-all duration-300 ${
                skill.color === 'primary'
                  ? 'hover:border-primary/40'
                  : 'hover:border-secondary/40'
              }`}
            >
              <div className={`mb-6 ${skill.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                <span className="material-symbols-outlined text-4xl">{skill.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-1">{skill.label}</h3>
              <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">{skill.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
