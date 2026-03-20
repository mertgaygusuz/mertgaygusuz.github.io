'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Experience() {
  const { t } = useLanguage()

  return (
    <section className="py-32 px-8 md:px-24" id="experience">
      <div className="max-w-4xl mx-auto">

        {/* Experience */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">
            02 / {t.experience.title.toUpperCase()}
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-20">
            {t.experience.title === 'Work Experience' ? 'The Journey' : 'Kariyer'}
          </h2>
        </motion.div>

        <div className="space-y-24">
          {t.experience.items.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12"
            >
              {/* Pulse dot */}
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${i === 0 ? 'bg-tertiary shadow-[0_0_15px_rgba(129,236,255,0.6)]' : 'bg-primary/40'}`} />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">{job.role}</h3>
                  <p className="text-primary font-medium tracking-wide">{job.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-label text-[12px] text-on-surface-variant tracking-widest uppercase">{job.period}</span>
                  <p className="font-label text-[11px] text-on-surface-variant/60 tracking-widest">{job.location}</p>
                </div>
              </div>

              <ul className="mt-6 text-on-surface-variant leading-relaxed space-y-3 list-disc pl-4">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">
            03 / {t.education.title.toUpperCase()}
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface mb-16">
            {t.education.title === 'Education' ? 'Academic' : 'Akademik'}
          </h2>
          <div className="space-y-12">
            {t.education.items.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l border-outline-variant/30 pl-8"
              >
                <h3 className="text-xl font-headline font-bold text-on-surface">{edu.degree}</h3>
                <p className="text-primary">{edu.school}</p>
                <span className="text-sm text-on-surface-variant font-label">{edu.period}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">
            04 / {t.certificates.title.toUpperCase()}
          </p>
          {t.certificates.items.map((cert, i) => (
            <div key={i} className="glass-panel p-8 rounded-xl border border-outline-variant/10">
              <h3 className="text-xl font-headline font-bold text-on-surface">{cert.name}</h3>
              <p className="text-primary mt-1 text-sm">{cert.issuer}</p>
              <p className="text-on-surface-variant mt-2">{cert.description}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
