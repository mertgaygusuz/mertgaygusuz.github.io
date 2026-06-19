'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ASSISTANT_ENDPOINT, findAnswer, GREETING, SUGGESTIONS } from '@/lib/assistant'

type Message = { role: 'user' | 'bot'; text: string }

export function AskMe() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Seed / reset the greeting whenever the panel opens or language changes
  useEffect(() => {
    if (open) {
      setMessages([{ role: 'bot', text: GREETING[lang] }])
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [open, lang])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = async (text: string) => {
    const q = text.trim()
    if (!q || loading) return
    const history = messages
      .filter((_, idx) => idx > 0) // drop the greeting
      .map(m => ({ role: m.role === 'user' ? 'user' : 'bot', text: m.text }))

    setMessages(prev => [...prev, { role: 'user', text: q }])
    setInput('')

    // Live Gemini assistant if configured; otherwise fall back to static answers.
    if (ASSISTANT_ENDPOINT) {
      setLoading(true)
      try {
        const res = await fetch(ASSISTANT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: q, history, lang }),
        })
        const data = await res.json()
        const answer = (res.ok && data.answer) ? data.answer : findAnswer(q, lang)
        setMessages(prev => [...prev, { role: 'bot', text: answer }])
      } catch {
        setMessages(prev => [...prev, { role: 'bot', text: findAnswer(q, lang) }])
      } finally {
        setLoading(false)
      }
    } else {
      setMessages(prev => [...prev, { role: 'bot', text: findAnswer(q, lang) }])
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={isEn ? 'Open AI assistant' : 'AI asistanını aç'}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 hero-gradient text-on-primary-fixed font-black rounded-full shadow-xl shadow-primary/30 px-5 py-3.5 hover:scale-105 transition-transform"
      >
        <span className="material-symbols-outlined">{open ? 'close' : 'smart_toy'}</span>
        <span className="hidden sm:inline text-sm uppercase tracking-wider font-label">
          {isEn ? 'Ask me' : 'Bana sor'}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-[1.75rem] overflow-hidden bg-surface-container-low border border-outline-variant/30 shadow-2xl"
            role="dialog"
            aria-label={isEn ? 'AI assistant' : 'AI asistanı'}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant/20 bg-surface-container">
              <div className="w-9 h-9 rounded-xl hero-gradient flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary-fixed text-xl">smart_toy</span>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm leading-tight">{isEn ? "Mert's AI Assistant" : "Mert'in AI Asistanı"}</p>
                <p className="text-xs text-on-surface-variant flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  {isEn ? 'Trained on my CV' : 'CV\'me göre eğitildi'}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label={isEn ? 'Close' : 'Kapat'}
                className="ml-auto text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'hero-gradient text-on-primary-fixed rounded-br-md font-medium'
                        : 'bg-surface-container text-on-surface rounded-bl-md border border-outline-variant/20'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-surface-container border border-outline-variant/20 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1.5">
                    {[0, 1, 2].map(d => (
                      <motion.span
                        key={d}
                        className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Suggestion chips (only before the first user question) */}
              {messages.length <= 1 && !loading && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS[lang].map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs font-label px-3 py-1.5 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={e => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 p-3 border-t border-outline-variant/20 bg-surface-container"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
                placeholder={isEn ? 'Ask about my work…' : 'İşim hakkında sor…'}
                className="flex-1 bg-surface-container-lowest rounded-full px-4 py-2.5 text-sm outline-none border border-outline-variant/30 focus:border-primary/50 transition-colors disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading}
                aria-label={isEn ? 'Send' : 'Gönder'}
                className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-on-primary-fixed shrink-0 hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
              >
                <span className="material-symbols-outlined text-xl">arrow_upward</span>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
