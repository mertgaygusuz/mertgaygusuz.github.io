'use client'

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest py-20 px-6 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 hero-gradient flex items-center justify-center rounded-lg">
                <span className="font-black text-on-primary-fixed text-sm">M</span>
              </div>
              <span className="font-label font-bold tracking-tighter text-lg uppercase">Mert Gaygusuz</span>
            </div>
            <p className="text-on-surface-variant text-sm font-label">
              © 2026 Portfolio · Built with precision
            </p>
          </div>

          {/* Links + availability */}
          <div className="md:col-span-8 flex flex-wrap justify-start md:justify-end gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-label text-xs text-outline uppercase tracking-widest">Connect</span>
              <div className="flex gap-6">
                <a
                  href="https://linkedin.com/in/mertgaygusuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface hover:text-primary transition-colors font-bold"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/mertgaygusuz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface hover:text-primary transition-colors font-bold"
                >
                  GitHub
                </a>
                <a
                  href="mailto:mertgaygusuz@hotmail.com"
                  className="text-on-surface hover:text-primary transition-colors font-bold"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-label text-xs text-outline uppercase tracking-widest">Availability</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-on-surface font-bold font-label">Ready for new projects</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
