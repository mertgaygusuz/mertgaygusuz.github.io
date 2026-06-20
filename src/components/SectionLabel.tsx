export function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-headline text-primary font-extrabold">{num}</span>
      <span className="h-px w-10 bg-outline-variant/60" />
      <span className="font-label text-xs uppercase tracking-[0.25em] text-on-surface-variant">{label}</span>
    </div>
  )
}
