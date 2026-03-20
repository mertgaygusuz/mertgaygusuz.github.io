'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

const SMALL_CELLS = [
  { key: 'Swift / SwiftUI', icon: 'sprint',     color: '#F05138' },
  { key: '.NET / C#',       icon: 'terminal',   color: '#512BD4' },
  { key: 'TypeScript',      icon: 'code',       color: '#3178C6' },
  { key: 'JavaScript',      icon: 'javascript', color: '#F7DF1E' },
]

const BOTTOM_CELLS = [
  { key: 'MongoDB',         icon: 'database',   color: '#47A248' },
  { key: 'SQL Server',      icon: 'storage',    color: '#CC2927' },
  { key: 'Redis',           icon: 'bolt',       color: '#DC382D' },
  { key: 'Angular / UIKit', icon: 'web',        color: '#DD0031' },
]

const RN_COLOR = '#61DAFB'
const API_COLOR = '#10B981'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32 px-6 md:px-24 bg-surface-container-low" id="skills">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <p className="font-label text-[11px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">
            01 / CAPABILITIES
          </p>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-on-surface">
            {t.skills.title === 'Skills' ? 'Skillset' : 'Beceriler'}
          </h2>
        </motion.div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Featured: React Native */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-xl flex flex-col gap-6 border border-outline-variant/10"
            style={{ boxShadow: `0 0 40px ${RN_COLOR}15` }}
          >
            <span className="material-symbols-outlined text-4xl" style={{ color: RN_COLOR }}>
              developer_mode_tv
            </span>
            <div>
              <h3 className="text-2xl font-headline font-bold mb-2">React Native</h3>
              <p className="text-on-surface text-sm leading-relaxed opacity-80">
                {t.skills.reactNativeDesc}
              </p>
            </div>
          </motion.div>

          {/* Small cells: 2 col grid */}
          <div className="grid grid-cols-2 gap-4">
            {SMALL_CELLS.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass-panel p-5 rounded-xl flex flex-col justify-center items-center gap-3 border border-outline-variant/10"
                style={{ boxShadow: `0 0 24px ${item.color}12` }}
              >
                <span className="material-symbols-outlined text-3xl" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <h4 className="font-label text-[11px] tracking-widest uppercase text-center text-on-surface">{item.key}</h4>
              </motion.div>
            ))}
          </div>

          {/* RESTful APIs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass-panel p-6 rounded-xl flex items-center gap-5 border border-outline-variant/10"
            style={{ boxShadow: `0 0 24px ${API_COLOR}12` }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${API_COLOR}18` }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ color: API_COLOR }}>api</span>
            </div>
            <div>
              <h4 className="text-lg font-headline font-bold">RESTful APIs</h4>
              <p className="text-on-surface text-sm opacity-80">{t.skills.apiDesc}</p>
            </div>
          </motion.div>

          {/* Bottom cells: 2 col grid */}
          <div className="grid grid-cols-2 gap-4">
            {BOTTOM_CELLS.map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass-panel p-5 rounded-xl flex flex-col justify-center items-center gap-3 border border-outline-variant/10"
                style={{ boxShadow: `0 0 24px ${item.color}12` }}
              >
                <span className="material-symbols-outlined text-3xl" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <h4 className="font-label text-[11px] tracking-widest uppercase text-center text-on-surface">{item.key}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 md:auto-rows-[160px]">
          {/* Featured: React Native */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 row-span-2 glass-panel p-10 rounded-xl flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500 border border-outline-variant/10"
            style={{ boxShadow: `0 0 40px ${RN_COLOR}15` }}
          >
            <span className="material-symbols-outlined text-5xl" style={{ color: RN_COLOR }}>
              developer_mode_tv
            </span>
            <div>
              <h3 className="text-3xl font-headline font-bold mb-2">React Native</h3>
              <p className="text-on-surface leading-relaxed opacity-80">
                {t.skills.reactNativeDesc}
              </p>
            </div>
          </motion.div>

          {/* Small cells row 1 */}
          {SMALL_CELLS.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center group hover:bg-surface-bright transition-all duration-500 border border-outline-variant/10"
              style={{ boxShadow: `0 0 24px ${item.color}12` }}
            >
              <span className="material-symbols-outlined text-3xl mb-3" style={{ color: item.color }}>
                {item.icon}
              </span>
              <h4 className="font-label text-xs tracking-widest uppercase text-center text-on-surface">{item.key}</h4>
            </motion.div>
          ))}

          {/* Wide cell: RESTful APIs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="col-span-2 glass-panel p-8 rounded-xl flex items-center gap-6 group hover:bg-surface-bright transition-all duration-500 border border-outline-variant/10"
            style={{ boxShadow: `0 0 24px ${API_COLOR}12` }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${API_COLOR}18` }}
            >
              <span className="material-symbols-outlined text-2xl" style={{ color: API_COLOR }}>api</span>
            </div>
            <div>
              <h4 className="text-lg font-headline font-bold">RESTful APIs</h4>
              <p className="text-on-surface text-xs opacity-80">{t.skills.apiDesc}</p>
            </div>
          </motion.div>

          {/* Small cells row 2 */}
          {BOTTOM_CELLS.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="glass-panel p-6 rounded-xl flex flex-col justify-center items-center group hover:bg-surface-bright transition-all duration-500 border border-outline-variant/10"
              style={{ boxShadow: `0 0 24px ${item.color}12` }}
            >
              <span className="material-symbols-outlined text-3xl mb-3" style={{ color: item.color }}>
                {item.icon}
              </span>
              <h4 className="font-label text-xs tracking-widest uppercase text-center text-on-surface">{item.key}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
