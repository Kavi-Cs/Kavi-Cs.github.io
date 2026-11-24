"use client";

import { Printer, X } from "lucide-react";
import {
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  ProjectItem,
  SKILLS,
} from "@/data/portfolio";

interface ProCVModalProps {
  open: boolean;
  onClose: () => void;
  projects: ProjectItem[];
}

export default function ProCVModal({
  open,
  onClose,
  projects,
}: ProCVModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 p-4 backdrop-blur-xs">
      <div className="no-print mx-auto mb-4 flex max-w-4xl items-center justify-between rounded-2xl bg-[#07291E] px-6 py-4 text-white shadow-xl">
        <div>
          <h3 className="text-sm font-bold text-[#B4F256]">
            Executive Engineering Curriculum Vitae
          </h3>
          <p className="text-xs text-white/70">
            ATS-optimized single/two-page engineering resume — ready to save as PDF
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full bg-[#B4F256] px-5 py-2 text-xs font-bold text-[#07291E] transition hover:bg-[#A3E63D]"
          >
            <Printer className="h-4 w-4" />
            <span>Download / Print PDF</span>
          </button>
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 p-2 text-white/80 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Printable A4 Resume Document */}
      <div
        id="printable-cv"
        className="mx-auto max-w-4xl rounded-xl bg-white p-10 text-slate-900 shadow-2xl sm:p-14"
      >
        {/* Header */}
        <div className="border-b-2 border-[#07291E] pb-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#07291E]">
            {PROFILE.name.toUpperCase()}
          </h1>
          <p className="mt-1 text-sm font-semibold text-emerald-800">
            {PROFILE.degree}
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
            <span>{PROFILE.location}</span>
            <span>•</span>
            <span>{PROFILE.phone}</span>
            <span>•</span>
            <span>{PROFILE.email}</span>
            <span>•</span>
            <span>github.com/Kavi-Cs</span>
            <span>•</span>
            <span>linkedin.com/in/kaveesha-induwara-55974a359</span>
          </div>
        </div>

        {/* Summary */}
        <section className="mt-5">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#07291E]">
            Engineering Profile
          </h2>
          <p className="mt-1.5 text-xs leading-relaxed text-slate-700">
            Electronics and Information Technology Honours undergraduate at the
            University of Colombo (Department of Physics) with hands-on
            experience in Embedded Systems (ATmega328P, Raspberry Pi 5, ESP32-S3,
            nRF52840), Digital Signal Processing (DSP & FFT), Edge AI / TinyML
            computer vision (YOLOv11, OpenCV, TensorFlow), industrial fieldbus
            protocols (CAN bus, Modbus), and full-stack software development.
          </p>
        </section>

        {/* Education */}
        <section className="mt-5">
          <h2 className="border-b border-slate-200 pb-1 text-xs font-extrabold uppercase tracking-widest text-[#07291E]">
            Education
          </h2>
          <div className="mt-2.5 space-y-3">
            {EDUCATION.map((edu) => (
              <div key={edu.institution}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xs font-bold text-slate-900">
                    {edu.institution}
                  </h3>
                  <span className="font-mono text-[11px] font-semibold text-slate-600">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-emerald-800">
                  {edu.degree}
                </p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-600">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mt-5">
          <h2 className="border-b border-slate-200 pb-1 text-xs font-extrabold uppercase tracking-widest text-[#07291E]">
            Technical Skills
          </h2>
          <div className="mt-2 space-y-1.5 text-xs text-slate-700">
            {Object.entries(SKILLS).map(([group, list]) => (
              <p key={group}>
                <span className="font-bold text-slate-900">{group}: </span>
                <span>{list.join(", ")}</span>
              </p>
            ))}
          </div>
        </section>

        {/* Engineering Projects */}
        <section className="mt-5">
          <h2 className="border-b border-slate-200 pb-1 text-xs font-extrabold uppercase tracking-widest text-[#07291E]">
            Selected Engineering & Research Projects
          </h2>
          <div className="mt-2.5 space-y-2.5">
            {projects.map((proj) => (
              <div key={proj.id}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xs font-bold text-slate-900">
                    {proj.title}{" "}
                    <span className="font-normal text-slate-500">
                      — {proj.role}
                    </span>
                  </h3>
                  <span className="font-mono text-[10px] text-slate-600">
                    {proj.period}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-700">
                  {proj.summary}
                </p>
                <p className="mt-0.5 font-mono text-[10px] text-emerald-800">
                  Stack: {proj.tech.join(" • ")} | Repo: {proj.githubUrl}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mt-5">
          <h2 className="border-b border-slate-200 pb-1 text-xs font-extrabold uppercase tracking-widest text-[#07291E]">
            Professional Experience
          </h2>
          {EXPERIENCE.map((exp) => (
            <div key={exp.organization} className="mt-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-xs font-bold text-slate-900">
                  {exp.role} — {exp.organization}
                </h3>
                <span className="font-mono text-[11px] text-slate-600">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] text-slate-700">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
