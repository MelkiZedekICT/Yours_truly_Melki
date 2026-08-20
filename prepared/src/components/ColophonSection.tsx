import { CONTACT, IDENTITY } from "@/lib/data";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const Github = ({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ className, strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function ColophonSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className="border-t-4 border-ink py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* ── Section Header ─────────────────────── */}
        <div className="mb-[30px]">
          <h2 className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em]">
            Colophon
          </h2>
          <div className="mt-2.5 h-[2px] bg-ink" />
        </div>

        {/* ── Contact Grid ───────────────────────── */}
        <div className="grid grid-cols-1 gap-10 min-[600px]:grid-cols-2 min-[940px]:grid-cols-3">
          {/* ─── Column 1: Direct Contact ────────── */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
              Direct Line
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-3 text-[15px] text-ink-soft no-underline transition-colors hover:text-ink"
              >
                <Mail className="h-4 w-4 flex-none text-accent" strokeWidth={1.5} />
                <span className="border-b border-transparent group-hover:border-ink">
                  {CONTACT.email}
                </span>
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="group flex items-center gap-3 text-[15px] text-ink-soft no-underline transition-colors hover:text-ink"
              >
                <Phone className="h-4 w-4 flex-none text-accent" strokeWidth={1.5} />
                <span className="border-b border-transparent group-hover:border-ink">
                  {CONTACT.phone}
                </span>
              </a>
            </div>
          </div>

          {/* ─── Column 2: Profiles ──────────────── */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
              On the Wire
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={CONTACT.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[15px] text-ink-soft no-underline transition-colors hover:text-ink"
              >
                <Github className="h-4 w-4 flex-none text-accent" strokeWidth={1.5} />
                <span className="border-b border-transparent group-hover:border-ink">
                  {CONTACT.github.label}
                </span>
                <ArrowUpRight className="h-3 w-3 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </a>
              <a
                href={CONTACT.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-[15px] text-ink-soft no-underline transition-colors hover:text-ink"
              >
                <Linkedin className="h-4 w-4 flex-none text-accent" strokeWidth={1.5} />
                <span className="border-b border-transparent group-hover:border-ink">
                  {CONTACT.linkedin.label}
                </span>
                <ArrowUpRight className="h-3 w-3 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* ─── Column 3: Location & Availability ─ */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
              Current Station
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-[15px] text-ink-soft">{IDENTITY.location}</p>
              <p className="text-[15px] text-ink-soft">{IDENTITY.availability}</p>
              <p className="mt-3 text-[15px] text-ink-soft">
                Available for internships, freelance projects, and full-time
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Line ─────────────────────────── */}
        <div className="mt-[60px] border-t border-ink/25 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
            <span>
              © {currentYear} {IDENTITY.name}
            </span>
            <span>
              Composed in {IDENTITY.location} · Set in Instrument Serif & Inter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
