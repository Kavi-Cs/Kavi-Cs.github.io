"use client";

import { useEffect, useRef } from "react";

interface FiberPulse {
  track: number;
  progress: number;
  speed: number;
  length: number;
}

export default function FiberCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animId = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const trackCount = 26;
    const pulses: FiberPulse[] = Array.from({ length: 18 }, (_, i) => ({
      track: Math.floor((i / 18) * trackCount),
      progress: (i * 0.19) % 1.4 - 0.2,
      speed: 0.0022 + (i % 5) * 0.00045,
      length: 0.14 + (i % 3) * 0.05,
    }));

    const getPoint = (trackIndex: number, t: number) => {
      const spread = (trackIndex - trackCount / 2) * 19;
      const x = -width * 0.08 + t * width * 1.16;
      const centerDip = Math.sin(t * Math.PI) * (height * 0.34);
      const y = height * 0.38 + spread + centerDip;
      return { x, y };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Base curved optical-fiber wave tracks
      for (let i = 0; i < trackCount; i++) {
        ctx.beginPath();
        const steps = 64;
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const pt = getPoint(i, t);
          if (s === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = "rgba(180, 242, 86, 0.09)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Luminous pulses traveling along the curved tracks
      for (const p of pulses) {
        p.progress += p.speed;
        if (p.progress - p.length > 1.08) {
          p.progress = -0.12;
          p.track = (p.track + 7) % trackCount;
        }

        const startT = Math.max(0, p.progress - p.length);
        const endT = Math.min(1, p.progress);
        if (endT <= startT) continue;

        const pStart = getPoint(p.track, startT);
        const pEnd = getPoint(p.track, endT);

        const grad = ctx.createLinearGradient(pStart.x, pStart.y, pEnd.x, pEnd.y);
        grad.addColorStop(0, "rgba(180, 242, 86, 0)");
        grad.addColorStop(0.75, "rgba(180, 242, 86, 0.68)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0.95)");

        ctx.beginPath();
        const segs = 20;
        for (let k = 0; k <= segs; k++) {
          const t = startT + (k / segs) * (endT - startT);
          const pt = getPoint(p.track, t);
          if (k === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.65;
        ctx.stroke();

        // Leading photon dot
        ctx.beginPath();
        ctx.arc(pEnd.x, pEnd.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#E8FFC2";
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
