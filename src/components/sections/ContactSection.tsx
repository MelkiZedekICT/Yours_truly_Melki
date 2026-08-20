"use client";

import { motion } from "framer-motion";
import { CONTACT, IDENTITY } from "@/lib/data";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-ink bg-paper py-0">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px]">
        {/* ── Left Column: Form ─────────────────────── */}
        <div className="p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[clamp(40px,4vw,48px)] font-normal leading-[1] text-ink">
              Put it in writing
            </h2>
            <p className="mt-4 max-w-[42ch] text-[17px] leading-[1.6] text-ink-soft">
              A project in mind, a role to fill, or just a good question - send it through and he'll get back to you.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 max-w-[600px]"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${CONTACT.email}`;
            }}
          >
            <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border-[1.5px] border-ink bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-ink"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full border-[1.5px] border-ink bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-ink"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                Subject
              </label>
              <input
                type="text"
                placeholder="A new product, a rebuild, a contract..."
                className="w-full border-[1.5px] border-ink bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-ink"
                required
              />
            </div>

            <div className="mb-8">
              <label className="mb-2 block font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink">
                The Story
              </label>
              <textarea
                rows={5}
                placeholder="Tell him what you're building."
                className="w-full resize-y border-[1.5px] border-ink bg-transparent px-4 py-3 font-body text-[15px] text-ink placeholder:text-ink-faint focus:outline-none focus:ring-1 focus:ring-ink"
                required
              />
            </div>

            <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row sm:items-center">
              <span className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Usually replies within 24 hours
              </span>
              <button
                type="submit"
                className="bg-ink px-8 py-3.5 font-gothic text-[11px] font-bold uppercase tracking-[0.18em] text-paper transition-transform hover:scale-[1.02]"
              >
                Send the Letter
              </button>
            </div>
          </motion.form>
        </div>

        {/* ── Right Column: Info ─────────────────────── */}
        <div className="border-t border-ink p-8 md:border-l md:border-t-0 md:p-12 lg:p-16 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-10"
          >
            {/* Direct Line */}
            <div>
              <h3 className="mb-2 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Direct Line
              </h3>
              <p className="font-display text-[22px] text-ink">{CONTACT.email}</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                For commissions, contracts, and the occasional good argument about engineering architecture.
              </p>
            </div>
            
            <div className="h-px bg-ink/20" />

            {/* The Desk */}
            <div>
              <h3 className="mb-2 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                The Desk
              </h3>
              <p className="font-display text-[22px] text-ink">{IDENTITY.location}</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                IST - working with teams worldwide, remote-first.
              </p>
            </div>

            <div className="h-px bg-ink/20" />

            {/* Availability */}
            <div>
              <h3 className="mb-2 font-gothic text-[11px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Availability
              </h3>
              <p className="font-display text-[22px] text-ink">{IDENTITY.availability}</p>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                Currently taking on select engineering projects, open source contributions, and new challenges.
              </p>
            </div>
          </motion.div>

          <div className="mt-16 flex gap-3">
            <a
              href={CONTACT.github.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-paper"
              aria-label="GitHub"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={CONTACT.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-paper"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex h-10 w-10 items-center justify-center border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-paper"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
