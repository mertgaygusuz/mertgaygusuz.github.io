'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const SKILLS = [
  { icon: 'smartphone',      label: 'React Native', sub: 'Cross-Platform', color: 'primary' },
  { icon: 'phone_iphone',    label: 'Swift & UI',   sub: 'Native iOS',     color: 'secondary' },
  { icon: 'code',            label: 'TypeScript',   sub: 'Architecture',   color: 'primary' },
  { icon: 'terminal',        label: '.NET Core',    sub: 'Backend',        color: 'secondary' },
  { icon: 'database',        label: 'MongoDB',      sub: 'Database',       color: 'primary' },
  { icon: 'smart_toy',       label: 'LangChain',    sub: 'AI Integration', color: 'secondary' },
]

export function Skills() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="py-24 px-6" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="pill mb-5">
              <span className="glow-dot" />
              <span className="font-label text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">
                {isEn ? 'Core Competencies' : 'Temel Yetkinlikler'}
              </span>
            </div>
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
              className="group glass glass-sheen p-8 rounded-3xl transition-all duration-300"
            >
              <div className="icon-orb w-12 h-12 rounded-xl mb-6">
                <span className="material-symbols-outlined text-2xl">{skill.icon}</span>
              </div>
              <h3 className="font-bold text-lg mb-1 text-heading">{skill.label}</h3>
              <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">{skill.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
