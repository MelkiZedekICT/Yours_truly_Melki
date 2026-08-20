"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsSection() {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-[76px]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        {/* ── Section Header ─────────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-[30px]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-5 pb-2.5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                The Record
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em]">
                Selected Works
              </h2>
            </div>
            <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              Entries I – V · Published 2025 – 2026
            </span>
          </div>
          <div className="h-1 bg-ink" />
        </motion.div>

        {/* ── Featured Project (Full Width) ───────── */}
        {featured && (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hover-premium-card noise-overlay group relative flex flex-col items-stretch border-b border-ink/25 min-[940px]:flex-row z-0"
          >
            <Link href={`/projects/${featured.id}`} className="absolute inset-0 z-10" aria-label={`View ${featured.title} details`} />
            {/* Left: Visual placeholder */}
            <div className="w-full self-start p-8 min-[940px]:w-[46%] min-[940px]:flex-none lg:p-12 relative z-20 pointer-events-none">
              <div className="relative border border-ink/20 bg-paper-bright p-2 pb-10 shadow-[0_2px_14px_rgba(22,20,15,0.06)] transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 -rotate-2 bg-[#e3decf] shadow-sm mix-blend-multiply" />
                
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-ink/10 bg-[#f9f8f3] min-[940px]:aspect-auto min-[940px]:h-[272px]">
                  {/* Abstract placeholder instead of code */}
                  <div className="flex h-full w-full flex-col items-center justify-center p-6 opacity-40">
                    <div className="mb-4 h-px w-16 bg-ink-soft" />
                    <p className="font-gothic text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                      Classified Architecture
                    </p>
                    <div className="mt-4 h-px w-16 bg-ink-soft" />
                  </div>
                  
                  {/* Red Stamp */}
                  <div className="absolute bottom-3 left-3 rotate-[-4deg] rounded-[40%] border-2 border-accent px-3 py-0.5 font-gothic text-[11px] font-extrabold uppercase tracking-widest text-accent opacity-90 mix-blend-multiply">
                    {featured.entryLabel}
                  </div>
                </div>
                
                <div className="absolute bottom-3 right-3 flex justify-end">
                  <span className="font-mono text-[10px] tracking-widest text-ink-soft">
                    recovered from github
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-1 flex-col p-8 min-[940px]:border-l min-[940px]:border-ink/25 lg:p-12 relative z-20 pointer-events-none">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent transition-colors duration-500">
                {featured.entryLabel}
              </span>
              <span className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink transition-colors duration-500">
                {featured.subtitle}
              </span>
              <h3 className="mt-2 font-display text-[clamp(30px,3.6vw,46px)] font-normal leading-[1.06] tracking-[-0.01em] transition-colors duration-500">
                {featured.title}
              </h3>
              <p className="mb-auto mt-4 max-w-[60ch] text-[17px] leading-[1.6] text-ink-soft transition-colors duration-500 [hyphens:auto] [text-align:justify]">
                {featured.description}
              </p>
              <div className="mb-5 mt-[24px] flex flex-wrap gap-2 pointer-events-auto relative z-30">
                {featured.techStack.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-ink/25 pt-5 transition-colors duration-500">
                <span className="font-mono text-[11px] text-ink-soft transition-colors duration-500">
                  {featured.year}
                </span>
                <span
                  className="group/link inline-flex items-center gap-1.5 border-b-[1.5px] border-accent pb-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent transition-colors duration-500"
                >
                  Open case file{" "}
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                </span>
              </div>
            </div>
          </motion.article>
        )}

        {/* ── Grid: Other Projects ────────────────── */}
        <div className="grid grid-cols-1 border-b border-ink/25 min-[600px]:grid-cols-2">
          {others.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`hover-premium-card noise-overlay group relative flex flex-col border-t border-ink/25 z-0 ${
                idx % 2 === 0
                  ? "min-[600px]:border-r min-[600px]:border-ink/25"
                  : ""
              }`}
            >
              <Link href={`/projects/${project.id}`} className="absolute inset-0 z-10" aria-label={`View ${project.title} details`} />
              <div className="flex flex-1 flex-col p-8 lg:p-10 relative z-20 pointer-events-none">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent transition-colors duration-500">
                  {project.entryLabel}
                </span>
                <span className="mt-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-ink transition-colors duration-500">
                  {project.subtitle}
                </span>
                <h3 className="mt-2 font-display text-[28px] font-normal leading-[1.06] tracking-[-0.01em] transition-colors duration-500">
                  {project.title}
                </h3>

                <p className="mb-auto mt-4 text-[15px] leading-[1.6] text-ink-soft transition-colors duration-500 [hyphens:auto] [text-align:justify]">
                  {project.description}
                </p>

                <div className="mb-5 mt-[24px] flex flex-wrap gap-2 pointer-events-auto relative z-30">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-ink/25 pt-5 transition-colors duration-500">
                  <span className="font-mono text-[11px] text-ink-soft transition-colors duration-500">
                    {project.year}
                  </span>
                  <span
                    className="group/link inline-flex items-center gap-1.5 border-b-[1.5px] border-accent pb-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-accent transition-colors duration-500"
                  >
                    Open case file{" "}
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
