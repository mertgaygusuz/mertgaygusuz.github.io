'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState('0')

  // Split into leading number + suffix (e.g. "100+" -> 100, "+")
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : value

  useEffect(() => {
    if (!match) {
      setDisplay(value)
      return
    }
    if (!inView) return
    const duration = 1100
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(String(Math.round(eased * target)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // `match`/`target` derive from the stable `value`; depend on primitives only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {match ? suffix : ''}
    </span>
  )
}

export function Stats() {
  const { t } = useLanguage()

  return (
    <section className="px-6 -mt-8 mb-8 md:mb-16" aria-label="Highlights">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-low/70 backdrop-blur-sm border border-outline-variant/15 rounded-[2rem] px-6 py-10 md:px-12 md:py-12 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-outline-variant/15 lg:divide-x"
        >
          {t.stats.items.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:px-4">
              <span className="font-headline font-black text-5xl md:text-6xl tracking-tighter bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent">
                <CountUp value={stat.value} />
              </span>
              <span className="font-label text-xs md:text-sm uppercase tracking-widest text-on-surface-variant mt-3 max-w-[12rem]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
