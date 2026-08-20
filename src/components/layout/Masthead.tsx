"use client";

import { motion } from "framer-motion";
import { IDENTITY } from "@/lib/data";

export default function Masthead() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-paper pt-[18px]"
    >
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* ── Top Meta Bar ────────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-between gap-4 pb-[9px] text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          <div className="flex-1">{IDENTITY.location}</div>
          <div className="flex-1 text-center">The Engineering Journal</div>
          <div className="flex-1 text-right">{IDENTITY.established}</div>
        </motion.div>

        {/* ── Masthead Name ──────────────────────── */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="m-0 border-t-2 border-ink px-0 pb-1 pt-1.5 text-center font-display text-[clamp(40px,8.5vw,104px)] font-normal leading-[0.92] tracking-[-0.01em]"
        >
          {IDENTITY.name}
          <small className="mt-3.5 block text-[clamp(8px,1.7vw,14px)] font-semibold uppercase tracking-[0.2em] text-ink-soft sm:tracking-[0.42em]">
            {IDENTITY.tagline}
          </small>
        </motion.h1>

        {/* ── Bottom Meta Bar ────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-1 flex flex-wrap items-center justify-center gap-x-[22px] gap-y-1 border-y-2 border-ink py-[7px] text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
        >
          <span>{formattedDate}</span>
          <span className="h-[3px] w-[3px] bg-ink-soft" />
          <span>{IDENTITY.edition}</span>
          <span className="h-[3px] w-[3px] bg-ink-soft" />
          <span>Cross-Domain Engineering</span>
          <span className="h-[3px] w-[3px] bg-ink-soft" />
          <span>{IDENTITY.availability}</span>
        </motion.div>
      </div>
    </motion.header>
  );
}
