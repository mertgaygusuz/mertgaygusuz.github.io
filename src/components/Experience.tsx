'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

export function Experience() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="px-6 py-24 md:py-28" id="experience">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">

          {/* Sticky left column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <SectionLabel num="03" label={isEn ? 'Experience' : 'Deneyim'} />
              <h2 className="mb-5 text-4xl font-extrabold leading-[0.95] tracking-tight md:text-5xl">
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
          <div className="flex flex-col gap-10 lg:col-span-8">
            {t.experience.items.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative border-l-2 border-outline-variant/20 pl-10"
              >
                <div className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full ring-8 ring-background ${i === 0 ? 'bg-primary' : 'bg-outline'}`} />

                <div className="mb-4">
                  <span className={`font-label font-bold tracking-widest text-sm uppercase ${i === 0 ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {job.period}
                  </span>
                  <h3 className="mt-2 text-2xl font-black">{job.role}</h3>
                  <p className="text-secondary font-label text-sm mt-1">{job.company} · {job.location}</p>
                </div>

                <ul className="list-disc space-y-2 pl-4 leading-relaxed text-on-surface-variant md:text-lg">
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
            className="mt-20 border-t border-outline-variant/20 pt-12"
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
