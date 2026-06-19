'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Experience() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="py-32 px-6" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

          {/* Sticky left column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="pill mb-5">
                <span className="glow-dot" />
                <span className="font-label text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">
                  {isEn ? 'Professional History' : 'Kariyer Geçmişi'}
                </span>
              </div>
              <h2 className="text-6xl font-black tracking-tighter mb-8 leading-none">
                {isEn ? 'The Journey' : 'Kariyer'}
              </h2>
              <p className="text-on-surface-variant text-lg font-label">
                {isEn
                  ? 'A chronological evolution through the tech ecosystem.'
                  : 'Teknoloji ekosistemindeki kronolojik bir gelişim yolculuğu.'}
              </p>
            </div>
          </div>

          {/* Timeline right column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            {t.experience.items.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 border-l-2 border-outline-variant/30"
              >
                <div className={`absolute -left-[10px] top-1 w-4 h-4 rounded-full ${i === 0 ? 'glow-dot !w-4 !h-4' : 'bg-outline ring-4 ring-canvas'}`} />

                <div className="mb-4">
                  <span className={`font-label font-bold tracking-widest text-sm uppercase ${i === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {job.period}
                  </span>
                  <h3 className="text-3xl font-black mt-2">{job.role}</h3>
                  <p className="text-secondary font-label text-sm mt-1">{job.company} · {job.location}</p>
                </div>

                <ul className="text-on-surface-variant leading-relaxed space-y-2 list-disc pl-4 text-lg">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        {t.certificates.items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-outline-variant/20 pt-16"
          >
            <div className="pill mb-5">
              <span className="glow-dot" />
              <span className="font-label text-primary uppercase tracking-[0.2em] text-[0.7rem] font-bold">
                {t.certificates.title}
              </span>
            </div>
            {t.certificates.items.map((cert, i) => (
              <div key={i} className="glass glass-sheen p-8 rounded-3xl max-w-2xl">
                <div className="icon-orb w-12 h-12 rounded-xl mb-5">
                  <span className="material-symbols-outlined text-2xl">workspace_premium</span>
                </div>
                <h3 className="text-xl font-bold text-heading">{cert.name}</h3>
                <p className="text-secondary mt-1 text-sm font-label">{cert.issuer}</p>
                <p className="text-on-surface-variant mt-2 leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
