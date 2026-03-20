'use client'

export function Footer() {

  return (
    <footer className="w-full py-20 border-t border-outline-variant/15 bg-background">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-8 w-full">
        <div className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
          © 2026 DESIGNED & BUILT BY MERT GAYGUSUZ
        </div>
        <div className="flex gap-12">
          <a href="https://github.com/mertgaygusuz" className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100">
            GitHub
          </a>
          <a href="https://linkedin.com/in/mertgaygusuz" className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100">
            LinkedIn
          </a>
          <a href="mailto:mertgaygusuz@hotmail.com" className="font-label text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface transition-colors opacity-80 hover:opacity-100">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
