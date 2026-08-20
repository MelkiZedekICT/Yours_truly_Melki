import Header from "@/components/layout/Header";
import Masthead from "@/components/layout/Masthead";
import HeroSection from "@/components/sections/HeroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import ColophonSection from "@/components/layout/ColophonSection";

export default function Home() {
  return (
    <div className="relative z-[1]">
      <Masthead />
      <Header />

      <main>
        {/* ── Title Page ─────────────────────────── */}
        <HeroSection />

        {/* ── Major Section Divider ──────────────── */}
        <hr className="border-0 border-t-4 border-ink" />

        {/* ── The Ledger (Experience) ────────────── */}
        <ExperienceSection />

        {/* ── Major Section Divider ──────────────── */}
        <hr className="border-0 border-t-4 border-ink" />

        {/* ── The Record (Projects) ──────────────── */}
        <ProjectsSection />

        {/* ── Major Section Divider ──────────────── */}
        <hr className="border-0 border-t-4 border-ink" />

        {/* ── The Index (Skills) ─────────────────── */}
        <SkillsSection />

        {/* ── Major Section Divider ──────────────── */}
        <hr className="border-0 border-t-4 border-ink" />

        {/* ── The Appendix (Achievements) ────────── */}
        <AchievementsSection />
      </main>

      {/* ── Contact Form ─────────────────────────── */}
      <ContactSection />

      {/* ── The Colophon (Footer) ────────────────── */}
      <ColophonSection />
    </div>
  );
}
