'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'

function Phone({
  src,
  alt,
  className,
  delay,
}: {
  src: string
  alt: string
  className: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute rounded-[2.4rem] bg-[#08080a] p-[5px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-black">
        <Image src={src} alt={alt} width={560} height={1217} className="w-full h-auto" />
      </div>
    </motion.div>
  )
}

export function Hero() {
  const { t, lang } = useLanguage()
  const isEn = lang === 'en'
  const cvHref = `/cv/MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-32 pb-24" id="hero">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

        {/* Left — editorial text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* availability */}
          <div className="mb-8 inline-flex items-center gap-2.5 text-sm font-medium text-on-surface-variant">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {isEn ? 'Available for work · Istanbul / Remote' : 'Yeni işlere açık · İstanbul / Uzaktan'}
          </div>

          <h1 className="font-headline text-6xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-[5.4rem]">
            Mert
            <br />
            Gaygusuz<span className="text-primary">.</span>
          </h1>

          <p className="mt-3 font-label text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {isEn ? 'Full-Stack Mobile Developer' : 'Full-Stack Mobil Geliştirici'}
          </p>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {t.hero.role}
          </p>

          {/* credential line */}
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-on-surface">
            <span>{isEn ? '4 App Store apps' : '4 App Store uygulaması'}</span>
            <span className="text-outline-variant">/</span>
            <span>{isEn ? '2+ yrs .NET back-end' : '2+ yıl .NET back-end'}</span>
            <span className="text-outline-variant">/</span>
            <span>iOS · React Native</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-on-primary transition-transform hover:-translate-y-0.5"
            >
              {isEn ? 'View work' : 'Projeleri gör'}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={cvHref}
              download={`MertGaygusuz_Resume_${lang.toUpperCase()}.pdf`}
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant/50 px-7 py-3.5 font-bold text-on-surface transition-colors hover:border-primary/60 hover:text-primary"
            >
              {t.nav.downloadCv} <span className="text-sm">↓</span>
            </a>
          </div>
        </motion.div>

        {/* Right — product showcase */}
        <div className="relative hidden h-[600px] lg:block">
          {/* warm glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(255,122,26,0.22), transparent 65%)' }}
          />

          {/* back phone — Blip */}
          <Phone
            src="/projects/blip-feed.png"
            alt="Blip — anonymous social feed"
            delay={0.35}
            className="left-0 top-24 z-0 w-[170px] -rotate-[9deg]"
          />
          {/* back phone — Jotly */}
          <Phone
            src="/projects/jotly-home.png"
            alt="Jotly — thought journal home screen"
            delay={0.45}
            className="right-0 top-20 z-0 w-[172px] rotate-[9deg]"
          />
          {/* front phone — Zynkra synced room */}
          <Phone
            src="/projects/zynkra-room.png"
            alt="Zynkra — synchronized room screen"
            delay={0.2}
            className="left-1/2 top-2 z-10 w-[238px] -translate-x-1/2 -rotate-[3deg]"
          />

          {/* caption chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container/80 px-4 py-2 text-xs font-semibold backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {isEn ? 'Zynkra · Blip · Jotly · live on the App Store' : "Zynkra · Blip · Jotly · App Store'da yayında"}
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#work"
        aria-label={isEn ? 'Scroll to projects' : 'Projelere kaydır'}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-on-surface-variant/70 transition-colors hover:text-primary md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-label text-[0.6rem] uppercase tracking-[0.3em]">{isEn ? 'Scroll' : 'Kaydır'}</span>
        <span className="text-lg leading-none">↓</span>
      </motion.a>
    </section>
  )
}
