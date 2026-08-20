"use client";

import { motion } from "framer-motion";
import { CONTACT, IDENTITY } from "@/lib/data";
import { Cpu } from "lucide-react";
import Link from "next/link";

export default function ColophonSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t-4 border-ink bg-ink py-20 text-paper min-h-[500px] overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-[30px] relative z-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center border-b border-paper/20 pb-16"
        >
          <h2 className="font-display text-[clamp(50px,8vw,90px)] font-normal leading-[1] text-paper">
            {IDENTITY.name}
          </h2>
        </motion.div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8 lg:gap-12 pb-24">
          
          {/* Col 1: Bio */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[15px] leading-[1.65] text-paper/80">
              An engineer in {IDENTITY.location}. {IDENTITY.missionStatement} This broadsheet is hand-set in Instrument Serif and Inter, deployed on the edge.
            </p>
          </motion.div>

          {/* Col 2: Sections */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-paper/60">
              Sections
            </h3>
            <ul className="space-y-3 font-display text-[19px] text-paper/90">
              <li>
                <Link href="/#projects" className="hover:text-accent transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-accent transition-colors">
                  The Stack
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-accent transition-colors">
                  Career Ledger
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Col 3: The Desk */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="mb-4 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-paper/60">
              The Desk
            </h3>
            <ul className="space-y-3 text-[15px] text-paper/90">
              <li>{IDENTITY.location}</li>
              <li>IST · Remote-first</li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Col 4: Wire Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-paper/60">
              Wire Services
            </h3>
            <ul className="space-y-3 font-display text-[19px] text-paper/90">
              <li>
                <a href={CONTACT.github.url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={CONTACT.linkedin.url} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Case Closed Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2, rotate: 0 }}
          whileInView={{ opacity: 0.9, scale: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 sm:left-auto sm:right-[30%] pointer-events-none"
        >
          <div className="rounded border-4 border-accent px-6 py-2">
            <span className="font-gothic text-[24px] font-extrabold uppercase tracking-[0.2em] text-accent mix-blend-screen opacity-90">
              Case Closed
            </span>
          </div>
        </motion.div>

        {/* Footer Bottom Line */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-paper/20 pt-6 sm:flex-row">
          <p className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-paper/60">
            © {currentYear} THE YASWANTH MELKI TIMES · ALL RIGHTS RESERVED · PRINTED IN {IDENTITY.location.toUpperCase()}
          </p>
          
          <div className="flex gap-2">
            <a href={CONTACT.github.url} className="flex h-8 w-8 items-center justify-center border border-paper/30 text-paper/70 hover:bg-paper hover:text-ink transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={CONTACT.linkedin.url} className="flex h-8 w-8 items-center justify-center border border-paper/30 text-paper/70 hover:bg-paper hover:text-ink transition-colors">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <div className="flex h-8 w-8 items-center justify-center border border-paper/30 text-paper/70">
              <Cpu className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
