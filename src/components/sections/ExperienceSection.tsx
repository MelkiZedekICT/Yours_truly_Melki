"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-paper py-[100px] cursor-magnify">
      <style dangerouslySetInnerHTML={{__html: `
        .cursor-magnify {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="%2316140f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>') 16 16, auto;
        }
      `}} />
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* ── Section Header ─────────────────────── */}
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-5">
          <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-ink">
            Known Whereabouts
          </span>
          <span className="font-gothic text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
            Movements on record since 2024
          </span>
        </div>
        
        <h2 className="mb-[18px] font-display text-[clamp(40px,5vw,56px)] font-normal leading-[1] text-ink">
          The Career Ledger
        </h2>

        {/* ── Ledger Borders ───────────────────────── */}
        <div className="h-[2px] bg-ink mb-[3px]" />
        <div className="h-[5px] bg-ink mb-2" />

        {/* ── Experience Entries ──────────────────── */}
        <div className="flex flex-col">
          {EXPERIENCE.map((entry, index) => {
            // Synthesize the action text from the bullets for the paragraph style
            const descriptionText = entry.bullets.map(b => b.action).join(" ");
            
            return (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-4 border-b border-ink/20 py-8 transition-colors hover:bg-paper-bright min-[940px]:flex-row min-[940px]:gap-12 lg:py-12"
              >
                {/* 1. Date */}
                <div className="w-[140px] flex-none pt-1">
                  <span className="font-mono text-[12px] tracking-wider text-ink-soft">
                    {entry.period}
                  </span>
                </div>

                {/* 2. Role & Company */}
                <div className="min-[940px]:w-[340px] flex-none">
                  <h3 className="font-display text-[26px] font-normal leading-[1.2] text-ink">
                    {entry.role}
                  </h3>
                  <p className="mt-1.5 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                    {entry.company}
                  </p>
                </div>

                {/* 3. Description */}
                <div className="flex-1 pt-1">
                  <p className="text-[16px] leading-[1.65] text-ink-soft">
                    {descriptionText}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
