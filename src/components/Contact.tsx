'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

export function Contact() {
  const { lang } = useLanguage()

  return (
    <section className="py-32 px-8 text-center border-t border-outline-variant/15" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-headline text-4xl md:text-7xl font-bold mb-12 tracking-tight text-on-surface">
          {lang === 'en' ? (
            <>Let&apos;s build something <br /><span className="text-tertiary italic">extraordinary</span> together.</>
          ) : (
            <>Birlikte <span className="text-tertiary italic">olağanüstü</span> <br />şeyler inşa edelim.</>
          )}
        </h2>

        <div className="flex flex-col items-center gap-6">
          <a
            href="mailto:mertgaygusuz@hotmail.com"
            className="inline-flex items-center gap-4 text-primary hover:text-tertiary transition-colors duration-300"
          >
            <span className="font-label text-lg uppercase tracking-widest">mertgaygusuz@hotmail.com</span>
            <span className="material-symbols-outlined text-3xl">arrow_outward</span>
          </a>

          <div className="flex gap-8 mt-4">
            <a
              href="https://github.com/mertgaygusuz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label text-sm"
            >
              <span className="material-symbols-outlined text-xl">code</span>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mertgaygusuz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label text-sm"
            >
              <span className="material-symbols-outlined text-xl">person</span>
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
