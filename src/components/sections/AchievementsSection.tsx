"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/lib/data";
import { Award, BookOpen } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-[76px]">
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
                The Appendix
              </span>
              <h2 className="mt-1.5 font-display text-[clamp(30px,4vw,46px)] font-normal leading-[1.02] tracking-[-0.015em]">
                Distinctions & Certifications
              </h2>
            </div>
          </div>
          <div className="h-1 bg-ink" />
        </motion.div>

        {/* ── Two-Column Layout ──────────────────── */}
        <div className="grid grid-cols-1 gap-10 min-[940px]:grid-cols-[1fr_1fr]">
          {/* ─── Certifications ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 border-b border-ink/25 pb-3">
              <BookOpen className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                Certifications
              </h3>
            </div>
            <div className="divide-y divide-ink/25">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="py-4">
                  <p className="text-[15px] font-medium leading-[1.4] text-ink">
                    {cert.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink-soft">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Achievements ────────────────────── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="min-[940px]:border-l min-[940px]:border-ink/25 min-[940px]:pl-10"
          >
            <div className="flex items-center gap-2 border-b border-ink/25 pb-3">
              <Award className="h-4 w-4 text-accent" strokeWidth={1.5} />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                Achievements & Leadership
              </h3>
            </div>
            <div className="divide-y divide-ink/25">
              {ACHIEVEMENTS.map((achievement) => (
                <div key={achievement.id} className="py-4">
                  <p className="text-[15px] font-medium leading-[1.4] text-ink">
                    {achievement.title}
                  </p>
                  <p className="mt-1 text-[14px] leading-[1.5] text-ink-soft">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
