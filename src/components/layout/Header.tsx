"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IDENTITY } from "@/lib/data";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#experience", label: "Ledger" },
  { href: "#projects", label: "Record" },
  { href: "#skills", label: "Index" },
  { href: "#achievements", label: "Appendix" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="no-print sticky top-0 z-40 border-b-2 border-ink bg-paper"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        <nav className="flex min-h-[50px] items-center justify-between gap-[18px] py-[9px]">
          {/* ── Logo ─────────────────────────────────── */}
          <a
            href="#"
            className="cursor-pointer select-none whitespace-nowrap font-display text-[22px] font-normal tracking-[-0.01em] text-ink no-underline"
          >
            {IDENTITY.firstName} {IDENTITY.lastName}
          </a>

          {/* ── Desktop Links ────────────────────────── */}
          <div className="hidden items-center gap-[26px] min-[940px]:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-pencil cursor-pointer text-xs font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              className="inline-flex items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-[15px] py-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
              href="#colophon"
            >
              Get in Touch
            </a>
          </div>

          {/* ── Mobile Toggle ────────────────────────── */}
          <div className="flex items-center gap-3 min-[940px]:hidden">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-[42px] w-[42px] flex-none items-center justify-center border-2 border-ink"
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-ink" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5 text-ink" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>

        {/* ── Mobile Menu ──────────────────────────── */}
        <div
          className={`overflow-hidden transition-all duration-200 min-[940px]:hidden ${
            menuOpen
              ? "pointer-events-auto max-h-[400px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="border-t-2 border-ink pb-4 pt-1.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-ink/25 px-0.5 py-[15px] font-display text-[30px] font-normal tracking-[-0.01em] text-ink no-underline group"
              >
                <span className="link-pencil">{link.label}</span>
                <span className="text-ink-soft text-sm transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
            <div className="mt-[18px]">
              <a
                className="inline-flex items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-[22px] py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
                href="#colophon"
                onClick={() => setMenuOpen(false)}
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
