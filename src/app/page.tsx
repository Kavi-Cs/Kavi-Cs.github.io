"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FiberCanvas from "@/components/FiberCanvas";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProCVModal from "@/components/ProCVModal";
import {
  DEFAULT_PROJECTS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  ProjectItem,
  SKILLS,
} from "@/data/portfolio";

export default function HomePage() {
  const [projects, setProjects] = useState<ProjectItem[]>(DEFAULT_PROJECTS);
  const [cvOpen, setCvOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kaveesha_next_projects_v1");
    if (saved) {
      try {
        setProjects(JSON.parse(saved));
      } catch {
        setProjects(DEFAULT_PROJECTS);
      }
    }
  }, []);

  const handleSaveProject = (proj: ProjectItem) => {
    setProjects((prev) => {
      const exists = prev.some((item) => item.id === proj.id);
      const updated = exists
        ? prev.map((item) => (item.id === proj.id ? proj : item))
        : [proj, ...prev];
      localStorage.setItem("kaveesha_next_projects_v1", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#07291E]">
      <Navbar onOpenCV={() => setCvOpen(true)} />

      {/* KRAG-Inspired Deep Forest Emerald Hero with Curved Optical-Fiber Waves */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#041D15] via-[#07291E] to-[#0B3B2B] px-6 py-28 text-center text-white sm:py-36">
        <FiberCanvas />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-[#B4F256]">
            <span className="h-2 w-2 rounded-full bg-[#B4F256]" />
            <span>University of Colombo • Electronics & IT Honours</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {PROFILE.heroHeadline[0]}
            <br />
            {PROFILE.heroHeadline[1]}
            <br />
            <span className="text-[#B4F256]">{PROFILE.heroHeadline[2]}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            {PROFILE.heroSubtext}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#B4F256] px-7 py-3.5 text-sm font-bold text-[#07291E] shadow-lg transition hover:bg-[#A3E63D]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <button
              onClick={() => setCvOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xs transition hover:border-[#B4F256] hover:text-[#B4F256]"
            >
              <FileText className="h-4 w-4" />
              <span>Generate Pro CV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section (KRAG White Card Grid + Live Project & Link Editor) */}
      <ProjectsSection projects={projects} onSaveProject={handleSaveProject} />

      {/* KRAG Electric Lime (#B4F256) Expertise Container */}
      <ExpertiseSection />

      {/* Technical Stack Matrix */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-[#07291E]/8 bg-white p-7 shadow-xs"
            >
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#07291E]">
                {category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#EFF9F3] px-3 py-1.5 text-xs font-semibold text-[#07291E]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Foundation & Experience */}
      <section id="education" className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <span className="inline-block rounded-full bg-[#B4F256] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#07291E]">
            Credentials & Track Record
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Education & Experience
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {EDUCATION.map((edu) => (
            <div
              key={edu.institution}
              className="rounded-2xl border border-[#07291E]/10 bg-white p-8 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[#07291E]">
                  {edu.institution}
                </h3>
                <span className="rounded-full bg-[#EFF9F3] px-3 py-1 font-mono text-xs font-semibold text-[#07291E]">
                  {edu.period}
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-emerald-800">
                {edu.degree}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#07291E]/75">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

        {EXPERIENCE.map((exp) => (
          <div
            key={exp.organization}
            className="mt-6 rounded-2xl border border-[#07291E]/10 bg-white p-8 shadow-xs"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-[#07291E]">{exp.role}</h3>
                <p className="text-sm font-semibold text-emerald-800">
                  {exp.organization}
                </p>
              </div>
              <span className="rounded-full bg-[#EFF9F3] px-3 py-1 font-mono text-xs font-semibold text-[#07291E]">
                {exp.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[#07291E]/75">
              {exp.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* KRAG-Style Leadership & Vision Portrait Section */}
      <section id="vision" className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="rounded-3xl bg-[#EFF9F3] p-5 shadow-xs">
              <div className="overflow-hidden rounded-2xl bg-[#07291E]">
                <img
                  src="/profile.jpg"
                  alt="Kaveesha Induwara"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <span className="inline-block rounded-full bg-[#B4F256] px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#07291E]">
              ENGINEERING VISION
            </span>

            <blockquote className="mt-6 text-2xl font-semibold leading-snug tracking-tight text-[#07291E] sm:text-4xl">
              {PROFILE.visionQuote}
            </blockquote>

            <div className="mt-8">
              <p className="text-base font-bold text-[#07291E]">
                {PROFILE.name}
              </p>
              <p className="text-sm text-[#07291E]/65">
                Electronics & IT Undergraduate • University of Colombo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KRAG Partner CTA Banner & Multi-Column Footer */}
      <footer id="contact" className="bg-[#F7F7F5] pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#07291E] px-8 py-12 text-white sm:flex-row sm:items-center sm:px-14">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Collaborate with {PROFILE.name.split(" ")[0]}
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Available for Embedded Systems, Edge AI, DSP research, and software engineering roles.
              </p>
            </div>
            <a
              href={PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#B4F256] px-7 py-3.5 text-sm font-bold text-[#07291E] transition hover:bg-[#A3E63D]"
            >
              <span>WhatsApp Me</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-10 border-b border-[#07291E]/10 pb-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B4F256] text-xs font-extrabold text-[#07291E]">
                  KI
                </span>
                <span className="text-base font-bold tracking-wider">
                  {PROFILE.brand}
                </span>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#07291E]/70">
                Engineering intelligent hardware, firmware, DSP pipelines, and scalable software from circuit to cloud.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#07291E] shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Open for Internships & R&D Collaborations</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#07291E]">
                Navigation
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-[#07291E]/75">
                <li>
                  <a href="#projects" className="hover:text-[#07291E]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#expertise" className="hover:text-[#07291E]">
                    Technical Expertise
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-[#07291E]">
                    Education & Experience
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setCvOpen(true)}
                    className="hover:text-[#07291E]"
                  >
                    Download Pro CV
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#07291E]">
                Direct Contact
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-[#07291E]/75">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#07291E]" />
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#07291E]" />
                  <a href={PROFILE.whatsappUrl}>{PROFILE.phone}</a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#07291E]" />
                  <span>{PROFILE.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#07291E]/60">
            <p>© 2026 {PROFILE.name}. Built with Next.js & Tailwind CSS.</p>
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#07291E] hover:underline"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#07291E] hover:underline"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ProCVModal
        open={cvOpen}
        onClose={() => setCvOpen(false)}
        projects={projects}
      />
    </div>
  );
}
