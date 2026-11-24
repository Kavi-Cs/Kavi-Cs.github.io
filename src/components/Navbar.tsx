"use client";

import { ArrowRight, FileText } from "lucide-react";
import { PROFILE } from "@/data/portfolio";

interface NavbarProps {
  onOpenCV: () => void;
}

export default function Navbar({ onOpenCV }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07291E]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B4F256] text-xs font-extrabold tracking-tighter text-[#07291E]">
            KI
          </span>
          <span className="text-base font-bold tracking-wider text-white">
            {PROFILE.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#projects" className="transition hover:text-[#B4F256]">
            Projects
          </a>
          <a href="#expertise" className="transition hover:text-[#B4F256]">
            Expertise
          </a>
          <a href="#education" className="transition hover:text-[#B4F256]">
            Education & Experience
          </a>
          <a href="#vision" className="transition hover:text-[#B4F256]">
            About
          </a>
          <a href="#contact" className="transition hover:text-[#B4F256]">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#B4F256] hover:text-[#B4F256] sm:text-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Pro CV</span>
          </button>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-[#B4F256] px-4 py-2 text-xs font-bold text-[#07291E] transition hover:bg-[#A3E63D] sm:inline-flex sm:text-sm"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
