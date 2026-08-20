import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Bolli Yaswanth Melki`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-paper pb-20 pt-[140px]">
      <article className="mx-auto max-w-[1180px] px-5 sm:px-[30px]">
        
        {/* ── Breadcrumb / Back Navigation ────────────────── */}
        <div className="mb-10 animate-fade-in-up">
          <Link 
            href="/#projects"
            className="group/link inline-flex items-center gap-2 border-b-2 border-transparent pb-0.5 font-gothic text-xs font-bold uppercase tracking-[0.14em] text-accent transition-all duration-300 hover:border-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-x-1" strokeWidth={2.5} />
            Back to Case Files
          </Link>
        </div>

        {/* ── Header Area ─────────────────────────────────── */}
        <header className="mb-[60px]">
          <div className="flex animate-fade-in-up flex-wrap items-baseline gap-3 pb-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-ink-soft">
              {project.entryLabel}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-faint" />
            <span className="font-gothic text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
              {project.subtitle}
            </span>
          </div>
          
          <h1 className="animate-fade-in-up delay-1 font-display text-[clamp(40px,6vw,80px)] font-normal leading-[1.05] tracking-[-0.01em] text-ink">
            {project.title}
          </h1>

          <div className="animate-fade-in-up delay-2 mt-8 flex flex-col gap-4 border-l-4 border-accent pl-5 md:flex-row md:items-center md:gap-10">
            <div>
              <p className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Year
              </p>
              <p className="mt-1 font-mono text-[13px] text-ink">{project.year}</p>
            </div>
            <div>
              <p className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Role
              </p>
              <p className="mt-1 font-mono text-[13px] text-ink">Solo Developer</p>
            </div>
            <div>
              <p className="font-gothic text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">
                Links
              </p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link mt-1 inline-flex items-center gap-1 border-b-[1.5px] border-ink pb-0.5 font-gothic text-[11px] font-bold uppercase tracking-[0.1em] text-ink transition-colors hover:text-accent hover:border-accent"
              >
                Source Code
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </header>

        {/* ── Visual Banner (Paper aesthetic) ─────────── */}
        <div className="animate-fade-in-up delay-3 relative mb-16 overflow-hidden border border-ink/20 bg-paper-bright p-2 pb-6 shadow-[0_4px_24px_rgba(22,20,15,0.06)] md:p-3 md:pb-12">
          {/* Tape */}
          <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 bg-[#e3decf] shadow-sm mix-blend-multiply" />
          
          <div className="relative aspect-video w-full overflow-hidden border border-ink/10 bg-[#f9f8f3] p-6 md:aspect-[21/9]">
             {/* Abstract placeholder instead of code */}
             <div className="flex h-full w-full flex-col items-center justify-center p-6 opacity-40">
                <div className="mb-4 h-px w-24 bg-ink-soft" />
                <p className="font-gothic text-xs uppercase tracking-[0.25em] text-ink-soft">
                  Classified Architecture
                </p>
                <div className="mt-4 h-px w-24 bg-ink-soft" />
             </div>
             
             {/* Red Stamp */}
             <div className="absolute bottom-6 left-6 rotate-[-4deg] rounded-[40%] border-[3px] border-accent px-5 py-2 font-gothic text-[14px] font-extrabold uppercase tracking-widest text-accent opacity-90 mix-blend-multiply">
               {project.entryLabel}
             </div>
          </div>
          
          <div className="absolute bottom-4 right-4 flex justify-end">
            <span className="font-mono text-xs tracking-widest text-ink-soft">
              recovered from github
            </span>
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────── */}
        <div className="animate-fade-in-up delay-4 grid grid-cols-1 gap-12 md:grid-cols-[1fr_300px]">
          <div>
            <h2 className="mb-6 font-display text-3xl text-ink">Project Overview</h2>
            <p className="font-body text-[17px] leading-[1.7] text-ink-soft [text-align:justify]">
              {project.description}
            </p>
            <p className="mt-6 font-body text-[17px] leading-[1.7] text-ink-soft [text-align:justify]">
              This project was architected as part of an ongoing exploration into robust engineering practices, focusing on performance, modularity, and clean code principles. Built with a focus on modern tooling and scalable infrastructure, it demonstrates the ability to solve complex problems elegantly from front to back.
            </p>
          </div>
          
          <aside className="border-t-2 border-ink pt-8 md:border-l-2 md:border-t-0 md:pl-8 md:pt-0">
            <h3 className="mb-5 font-gothic text-xs font-bold uppercase tracking-[0.16em] text-ink">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
