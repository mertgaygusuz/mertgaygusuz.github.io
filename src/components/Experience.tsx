'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

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
              <SectionLabel num="03" label={isEn ? 'Experience' : 'Deneyim'} />
              <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[0.95]">
                {isEn ? 'Where I’ve worked' : 'Çalıştığım yerler'}
              </h2>
              <p className="text-on-surface-variant text-lg">
                {isEn
                  ? 'From .NET back-ends to shipping mobile products.'
                  : '.NET back-end’lerden mobil ürün geliştirmeye.'}
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
                className="relative pl-12 border-l-2 border-outline-variant/20"
              >
                <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-8 ring-background ${i === 0 ? 'bg-primary' : 'bg-outline'}`} />

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
            <div className="font-label text-xs uppercase tracking-[0.25em] text-on-surface-variant mb-5">
              {t.certificates.title}
            </div>
            {t.certificates.items.map((cert, i) => (
              <div key={i} className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/10 max-w-2xl">
                <h3 className="text-xl font-bold text-on-surface">{cert.name}</h3>
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
