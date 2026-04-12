'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Contact() {
  const { lang, t } = useLanguage()

  return (
    <section className="py-24 px-6 border-t border-outline-variant/10" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Education */}
        <div className="max-w-md">
          <span className="font-label text-primary uppercase tracking-[0.3em] text-sm block mb-4">
            {t.education.title === 'Education' ? 'Academic Background' : 'Akademik Geçmiş'}
          </span>
          <h2 className="text-4xl font-black tracking-tight mb-8">
            {t.education.title}
          </h2>
          <div className="space-y-8">
            {t.education.items.map((edu, i) => (
              <div key={i}>
                {i > 0 && <div className="w-12 h-px bg-outline-variant/30 mb-8" />}
                <h4 className="font-bold text-xl">{edu.degree}</h4>
                <p className="text-on-surface-variant font-label">{edu.school}</p>
                <p className="text-sm text-on-surface-variant/60 font-label mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl"
        >
          <div className="bg-surface-container-low p-12 rounded-[2.5rem] border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 block">auto_awesome</span>
            <h3 className="text-3xl font-black mb-6">
              {lang === 'en'
                ? "Let's build something extraordinary together"
                : 'Birlikte olağanüstü şeyler inşa edelim'}
            </h3>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              {lang === 'en'
                ? "Currently open to new opportunities and interesting mobile projects. Whether you have a specific vision or just want to chat about React Native, I'm all ears."
                : 'Yeni fırsatlara ve ilginç mobil projelere açığım. Belirli bir vizyonunuz varsa ya da sadece React Native hakkında konuşmak istiyorsanız, buradayım.'}
            </p>
            <a
              href="mailto:mertgaygusuz@hotmail.com"
              className="hero-gradient px-8 py-4 rounded-xl text-on-primary-fixed font-black inline-flex items-center gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              {lang === 'en' ? 'Send a Message' : 'Mesaj Gönder'}
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
