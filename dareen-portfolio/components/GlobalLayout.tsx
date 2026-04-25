"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CustomCursor from "./CustomCursor";
import { meta } from "@/data/portfolio";

const NAV_LINKS = [
  { href: "#experience", label: "experience()" },
  { href: "#projects",   label: "projects[]" },
  { href: "#skills",     label: "stack{}" },
  { href: "#contact",    label: "connect()" },
];

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* CSS Custom Properties */}
      <style >{`
        :root {
          --bg:      #0a0a0f;
          --bg2:     #111118;
          --bg3:     #1a1a24;
          --text:    #e8e8f0;
          --muted:   #8888a0;
          --accent:  #7c6cfa;
          --accent2: #3dd6ac;
          --accent3: #fa8c6c;
          --border:  rgba(255,255,255,0.08);
          --mono:    'Space Mono', monospace;
          --sans:    'DM Sans', sans-serif;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: var(--sans);
          font-size: 15px;
          line-height: 1.65;
          overflow-x: hidden;
          cursor: none;
        }
        a, button, [data-cursor] { cursor: none; }

        /* Scanline overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.025) 2px,
            rgba(0,0,0,0.025) 4px
          );
          pointer-events: none;
          z-index: 1000;
        }

        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.4; transform: scale(0.8); }
        }
        .blink { animation: blink 1s step-end infinite; }
        .pulse-dot { animation: pulse-dot 2s infinite; }
      `}</style>

      {/* Cursor */}
      <CustomCursor />

      {/* Navigation */}
<nav
  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300"
  style={{
    background: scrolled ? "rgba(10,10,15,0.92)" : "rgba(10,10,15,0.7)",
    backdropFilter: "blur(12px)",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
  }}
>
  {/* Logo - Left */}
  <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)" }}>
    <span style={{ color: "var(--muted)" }}>~/</span>
    {meta.github.toLowerCase().replace(/\s/g, "")}
  </span>

  {/* Links - Center - NOW VISIBLE */}
  <ul className="flex gap-8 list-none m-0 p-0">
    {NAV_LINKS.map((l) => (
      <li key={l.href}>
        <a
          href={l.href}
          data-cursor="navigate()"
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--muted)",
            textDecoration: "none",
            letterSpacing: "0.05em",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
        >
          {l.label}
        </a>
      </li>
    ))}
  </ul>

  {/* Status - Right */}
  <div className="flex items-center gap-2" style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent2)" }}>
    <div
      className="pulse-dot rounded-full"
      style={{ width: 6, height: 6, background: "var(--accent2)" }}
    />
    {meta.status}
  </div>
</nav>

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <footer
        className="text-center py-16 px-8"
        style={{ borderTop: "1px solid var(--border)", fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}
      >
        <div>built with intent · {meta.name} · 2025</div>
        <div style={{ color: "var(--accent2)", marginTop: 8 }}>exit 0 — no errors, no warnings</div>
      </footer>
    </>
  );
}
