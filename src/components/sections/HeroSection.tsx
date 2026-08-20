"use client";

import { motion } from "framer-motion";
import { IDENTITY, EDUCATION, CONTACT } from "@/lib/data";
import { MapPin, GraduationCap, Layers, Radio } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pb-2 pt-[30px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* ── Section Label ──────────────────────── */}
        <div className="mb-[18px] flex items-center justify-between gap-4 border-b border-ink/25 pb-[9px] text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
          <span>Title Page</span>
          <span>Filed under: Active Research</span>
        </div>

        {/* ── Two-Column Grid ────────────────────── */}
        <div className="grid grid-cols-1 items-start gap-10 min-[940px]:grid-cols-[1.55fr_1fr]">
          {/* ─── Left Column: Headline + Copy ────── */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block text-xs font-bold uppercase tracking-[0.18em] text-ink"
            >
              {IDENTITY.edition} — First Edition
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-1 font-display text-[clamp(40px,6.6vw,86px)] font-normal leading-none tracking-[-0.02em]"
            >
              Software & Embedded Engineer building across the stack —{" "}
              <em className="italic">from bare metal to the browser.</em>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[30ch] border-l-4 border-ink pl-[18px] text-[clamp(18px,2vw,23px)] italic leading-[1.45] text-ink-soft"
            >
              {IDENTITY.missionStatement}
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft"
            >
              By{" "}
              <b className="text-ink">The Engineering Desk</b>{" "}
              · Reporting from {IDENTITY.location}
            </motion.p>

            {/* ── CTAs ───────────────────────────── */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-[22px] flex flex-wrap gap-3"
            >
              <a
                className="inline-flex items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-ink px-7 py-[15px] text-[14px] font-bold uppercase tracking-[0.1em] text-paper transition-colors duration-150 hover:bg-transparent hover:text-ink"
                href="#projects"
              >
                Read the work →
              </a>
              <a
                className="inline-flex items-center gap-2.5 whitespace-nowrap border-2 border-ink bg-transparent px-7 py-[15px] text-[14px] font-bold uppercase tracking-[0.1em] text-ink transition-colors duration-150 hover:bg-ink hover:text-paper"
                href="#colophon"
              >
                Get in touch
              </a>
            </motion.div>

            {/* ── Stat Cards Grid ─────────────────── */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-[30px] grid grid-cols-2 border-y-2 border-ink min-[600px]:grid-cols-4"
            >
              <div className="border-b border-ink/25 border-r border-ink/25 px-[18px] py-4 min-[600px]:border-b-0">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <div className="whitespace-nowrap font-display text-[clamp(22px,2.3vw,32px)] leading-none">
                    B.Tech
                  </div>
                </div>
                <div className="mt-[7px] text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  ICT · {EDUCATION.period}
                </div>
              </div>

              <div className="border-b border-ink/25 px-[18px] py-4 min-[600px]:border-b-0 min-[600px]:border-r min-[600px]:border-ink/25">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <div className="whitespace-nowrap font-display text-[clamp(22px,2.3vw,32px)] leading-none">
                    India
                  </div>
                </div>
                <div className="mt-[7px] text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  {IDENTITY.location} · {EDUCATION.institution}
                </div>
              </div>

              <div className="border-r border-ink/25 px-[18px] py-4 min-[600px]:border-r">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <div className="whitespace-nowrap font-display text-[clamp(22px,2.3vw,32px)] leading-none">
                    5+
                  </div>
                </div>
                <div className="mt-[7px] text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Domains · Full-stack to Embedded
                </div>
              </div>

              <div className="px-[18px] py-4">
                <div className="flex items-center gap-2">
                  <Radio className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <div className="whitespace-nowrap font-display text-[clamp(22px,2.3vw,32px)] leading-none">
                    Active
                  </div>
                </div>
                <div className="mt-[7px] text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-soft">
                  Status · {IDENTITY.availability}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Right Column: Bio Prose ─────────── */}
          <div className="border-t-2 border-ink pt-[22px] min-[940px]:border-l min-[940px]:border-t-0 min-[940px]:border-ink/25 min-[940px]:pl-[34px] min-[940px]:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="label-caps-strong">Profile</span>
              <p className="mt-3 text-[16px] leading-[1.65] text-ink-soft [hyphens:auto] [text-align:justify]">
                {IDENTITY.shortBio}
              </p>
            </motion.div>

            {/* ── Education Card ──────────────────── */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 border-t border-ink/25 pt-4"
            >
              <span className="label-caps-strong">Education</span>
              <div className="mt-2">
                <p className="font-display text-[20px] leading-tight">
                  {EDUCATION.institution}
                </p>
                <p className="mt-1 text-sm text-ink-soft">
                  {EDUCATION.degree}
                </p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                  <span>{EDUCATION.period}</span>
                  <span>CGPA: {EDUCATION.cgpa}</span>
                  <span>{EDUCATION.accreditation}</span>
                </div>
              </div>
            </motion.div>

            {/* ── Quick Links ────────────────────── */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 border-t border-ink/25 pt-4"
            >
              <div className="flex flex-wrap gap-x-[18px] gap-y-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-soft">
                <a
                  href={CONTACT.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[7px] transition-colors hover:text-ink"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {CONTACT.github.label}
                </a>
                <a
                  href={CONTACT.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[7px] transition-colors hover:text-ink"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {CONTACT.linkedin.label}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
