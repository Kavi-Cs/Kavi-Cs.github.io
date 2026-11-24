"use client";

import { useState } from "react";
import { ArrowRight, ExternalLink, Pencil, Plus, X } from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSaveProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({
  projects,
  onSaveProject,
}: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<ProjectItem | null>(null);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<"production" | "ongoing" | "research">("production");
  const [category, setCategory] = useState<
    "Edge AI & CV" | "Embedded & IoT" | "Full-Stack & Mobile"
  >("Edge AI & CV");
  const [period, setPeriod] = useState("2026");
  const [role, setRole] = useState("Lead Developer");
  const [summary, setSummary] = useState("");
  const [techInput, setTechInput] = useState("");
  const [githubUrl, setGithubUrl] = useState("https://github.com/Kavi-Cs/");

  const categories = ["All", "Edge AI & CV", "Embedded & IoT", "Full-Stack & Mobile"];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const openNew = () => {
    setEditing(null);
    setTitle("");
    setStatus("production");
    setCategory("Edge AI & CV");
    setPeriod("2026");
    setRole("Lead Engineer");
    setSummary("");
    setTechInput("Python, Edge AI, Embedded C");
    setGithubUrl("https://github.com/Kavi-Cs/");
    setModalOpen(true);
  };

  const openEdit = (p: ProjectItem) => {
    setEditing(p);
    setTitle(p.title);
    setStatus(p.status);
    setCategory(p.category);
    setPeriod(p.period);
    setRole(p.role);
    setSummary(p.summary);
    setTechInput(p.tech.join(", "));
    setGithubUrl(p.githubUrl);
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const initials = title
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase() || "")
      .join("");

    onSaveProject({
      id: editing ? editing.id : `proj-${Date.now()}`,
      title: title.trim(),
      status,
      category,
      period: period.trim() || "2026",
      role: role.trim() || "Developer",
      summary: summary.trim(),
      tech: techInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      githubUrl: githubUrl.trim() || "https://github.com/Kavi-Cs",
      iconBg: editing ? editing.iconBg : "#E6F7ED",
      iconColor: editing ? editing.iconColor : "#07291E",
      iconSymbol: initials || "PR",
    });
    setModalOpen(false);
  };

  const badgeStyle = (s: ProjectItem["status"]) => {
    if (s === "production")
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    if (s === "ongoing")
      return "bg-lime-100 text-[#07291E] border-lime-300";
    return "bg-amber-100 text-amber-800 border-amber-200";
  };

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#07291E] sm:text-5xl">
          Projects engineered by me
        </h2>
        <p className="mt-4 text-sm text-[#07291E]/70 sm:text-base">
          Production hardware systems, Edge AI models, DSP pipelines, and full-stack applications.
        </p>
      </div>

      {/* Filter & Add Project Controls */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                filter === cat
                  ? "bg-[#07291E] text-white"
                  : "bg-white text-[#07291E]/75 hover:bg-[#07291E]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-full bg-[#07291E] px-5 py-2.5 text-xs font-semibold text-[#B4F256] shadow-sm transition hover:bg-[#041D15] sm:text-sm"
        >
          <Plus className="h-4 w-4" />
          <span>Add Project / GitHub Link</span>
        </button>
      </div>

      {/* KRAG-Style 3-Column Clean Project Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-[#07291E]/8 bg-white p-7 shadow-[0_8px_30px_rgb(7,41,30,0.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(7,41,30,0.09)]"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div
                    style={{
                      backgroundColor: project.iconBg,
                      color: project.iconColor,
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold tracking-tight"
                  >
                    {project.iconSymbol}
                  </div>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-[#07291E]">
                      {project.title}
                    </h3>
                    <span
                      className={`mt-1 inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${badgeStyle(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openEdit(project)}
                  title="Edit Project or GitHub URL"
                  className="rounded-lg p-1.5 text-[#07291E]/40 transition hover:bg-[#F7F7F5] hover:text-[#07291E]"
                >
                  <Pencil className="h-3.5 w-3.5" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#07291E]/70">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-[#F7F7F5] px-2.5 py-1 font-mono text-[11px] font-medium text-[#07291E]/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[#07291E]/8 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#07291E] transition group-hover:text-emerald-700"
              >
                <span>View Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="font-mono text-[11px] text-[#07291E]/45">
                {project.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#07291E]/10 pb-4">
              <h3 className="text-lg font-bold text-[#07291E]">
                {editing ? "Edit Project & GitHub Link" : "Add New Project"}
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg p-1 text-[#07291E]/60 hover:bg-[#F7F7F5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#07291E]">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Real-Time FFT Vibration Analyzer"
                  className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3.5 py-2 text-sm focus:border-[#07291E] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#07291E]">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) =>
                      setCategory(
                        e.target.value as
                          | "Edge AI & CV"
                          | "Embedded & IoT"
                          | "Full-Stack & Mobile"
                      )
                    }
                    className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3 py-2 text-sm"
                  >
                    <option value="Edge AI & CV">Edge AI & CV</option>
                    <option value="Embedded & IoT">Embedded & IoT</option>
                    <option value="Full-Stack & Mobile">Full-Stack & Mobile</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#07291E]">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value as "production" | "ongoing" | "research"
                      )
                    }
                    className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3 py-2 text-sm"
                  >
                    <option value="production">production</option>
                    <option value="ongoing">ongoing</option>
                    <option value="research">research</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#07291E]">
                  GitHub Repository / Live Link
                </label>
                <input
                  type="url"
                  required
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/Kavi-Cs/your-repo"
                  className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3.5 py-2 font-mono text-xs focus:border-[#07291E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#07291E]">
                  Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Briefly explain hardware/software architecture and impact..."
                  className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3.5 py-2 text-sm focus:border-[#07291E] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#07291E]">
                  Technologies (comma separated)
                </label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-[#07291E]/20 px-3.5 py-2 font-mono text-xs focus:border-[#07291E] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-full px-4 py-2 text-xs font-semibold text-[#07291E]/70 hover:bg-[#F7F7F5]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#07291E] px-5 py-2 text-xs font-semibold text-[#B4F256] hover:bg-[#041D15]"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
