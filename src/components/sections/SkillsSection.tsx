"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[76px]">
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
              <h2 className="font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em]">
                Technical Competencies
              </h2>
            </div>
            <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
              {SKILLS.length} Categories · Cross-Domain
            </span>
          </div>
          <div className="h-1 bg-ink" />
        </motion.div>

        {/* ── Skill Groups Grid ──────────────────── */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[940px]:grid-cols-3">
          {SKILLS.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: groupIdx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`border-b border-ink/25 py-6 ${
                groupIdx % 3 !== 2
                  ? "min-[940px]:border-r min-[940px]:border-ink/25 min-[940px]:pr-6"
                  : ""
              } ${
                groupIdx % 2 !== 1
                  ? "min-[600px]:border-r min-[600px]:border-ink/25 min-[600px]:pr-6 min-[940px]:border-r-0 min-[940px]:pr-0"
                  : "min-[600px]:pl-6 min-[940px]:pl-0"
              } ${
                groupIdx % 3 === 1
                  ? "min-[940px]:px-6"
                  : groupIdx % 3 === 2
                  ? "min-[940px]:pl-6"
                  : ""
              }`}
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
