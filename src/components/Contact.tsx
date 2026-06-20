'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { SectionLabel } from '@/components/SectionLabel'

export function Contact() {
  const { lang, t } = useLanguage()
  const isEn = lang === 'en'

  return (
    <section className="py-28 px-6 border-t border-outline-variant/10" id="education">
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-[0.9fr_1.1fr]">

        {/* Education */}
        <div>
          <div className="font-label text-xs uppercase tracking-[0.25em] text-on-surface-variant mb-5">
            {isEn ? 'Academic Background' : 'Akademik Geçmiş'}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
            {t.education.title}
          </h2>
          <div className="space-y-8">
            {t.education.items.map((edu, i) => (
              <div key={i}>
                {i > 0 && <div className="w-12 h-px bg-outline-variant/30 mb-8" />}
                <h4 className="font-bold text-xl">{edu.degree}</h4>
                <p className="text-on-surface-variant">{edu.school}</p>
                <p className="text-sm text-on-surface-variant/60 mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="scroll-mt-28"
        >
          <div className="bg-surface-container-low p-10 md:p-12 rounded-[2.5rem] border border-outline-variant/20">
            <SectionLabel num="04" label={isEn ? 'Get in touch' : 'İletişim'} />
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              {isEn ? 'Let’s build something together.' : 'Birlikte bir şeyler inşa edelim.'}
            </h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              {isEn
                ? "I'm open to new opportunities and interesting mobile projects. Have a vision — or just want to talk iOS & React Native? I'm all ears."
                : 'Yeni fırsatlara ve ilginç mobil projelere açığım. Bir vizyonun mu var, ya da sadece iOS & React Native konuşmak mı istiyorsun? Dinliyorum.'}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="mailto:mertgaygusuz@hotmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-on-primary transition-transform hover:-translate-y-0.5"
              >
                {isEn ? 'Send a message' : 'Mesaj gönder'}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://linkedin.com/in/mertgaygusuz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-on-surface hover:text-primary transition-colors"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
