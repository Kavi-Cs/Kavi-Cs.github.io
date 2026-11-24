import { Activity, Code2, Cpu, Eye } from "lucide-react";
import { EXPERTISE } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 className="h-5 w-5 text-[#07291E]" />,
  cpu: <Cpu className="h-5 w-5 text-[#07291E]" />,
  activity: <Activity className="h-5 w-5 text-[#07291E]" />,
  eye: <Eye className="h-5 w-5 text-[#07291E]" />,
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-[2rem] bg-[#B4F256] px-8 py-14 text-[#07291E] shadow-sm sm:px-14 sm:py-16">
        <div className="mb-8 flex items-center gap-2 border-b border-[#07291E]/15 pb-4 text-xs font-bold uppercase tracking-wider">
          <span className="h-2 w-2 rounded-full bg-[#07291E]" />
          <span>Core Capabilities</span>
        </div>

        <h2 className="mb-12 text-4xl font-bold tracking-tight sm:text-5xl">
          Technical Expertise
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {EXPERTISE.map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-xs">
                {iconMap[item.icon]}
              </div>
              <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
              <p className="max-w-md text-sm leading-relaxed text-[#07291E]/85 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
