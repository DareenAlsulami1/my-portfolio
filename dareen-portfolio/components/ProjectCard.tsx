"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Project, BadgeVariant } from "@/data/portfolio";

/* ── Badge styling map ────────────────────────── */
const BADGE_STYLES: Record<BadgeVariant, { bg: string; color: string }> = {
  prod:     { bg: "rgba(61,214,172,0.1)",  color: "#3dd6ac" },
  research: { bg: "rgba(124,108,250,0.1)", color: "#7c6cfa" },
  design:   { bg: "rgba(250,140,108,0.1)", color: "#fa8c6c" },
};

/* ── Section row inside the card ─────────────── */
function CardSection({ label, text }: { label: string; text: string }) {
  return (
    <div className="mb-4">
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "var(--accent)",
          letterSpacing: "0.08em",
          marginBottom: 4,
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{text}</p>
    </div>
  );
}

/* ── Main export ──────────────────────────────── */
interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);

  const badge = BADGE_STYLES[project.badge];

  return (
    <motion.div
      ref={ref}
      data-cursor="open_project()"
      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 32, filter: "blur(4px)" }
      }
      transition={{
        duration: 0.55,
        delay: index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg2)",
        border: `1px solid ${hovered ? "rgba(124,108,250,0.3)" : "var(--border)"}`,
        borderRadius: 6,
        padding: "1.75rem",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.25s",
      }}
    >
      {/* Left accent bar */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 3,
          height: "100%",
          background: "linear-gradient(to bottom, var(--accent), transparent)",
          borderRadius: "6px 0 0 6px",
        }}
      />

      {/* Header row */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 13,
            fontWeight: 700,
            color: "var(--text)",
          }}
        >
          {project.name}
        </span>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            padding: "3px 8px",
            borderRadius: 2,
            whiteSpace: "nowrap",
            background: badge.bg,
            color: badge.color,
          }}
        >
          {project.badgeLabel}
        </span>
      </div>

      {/* Tagline */}
      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
        {project.tagline}
      </p>

      <CardSection label="SYSTEM ARCHITECTURE" text={project.architecture} />
      <CardSection label="CRITICAL CHALLENGE"  text={project.challenge} />

      {/* Tech stack */}
      <div className="flex flex-wrap gap-[6px] mt-5">
        {project.stack.map((tag) => (
          <motion.span
            key={tag}
            animate={{
              color:        hovered ? "var(--text)"           : "var(--muted)",
              borderColor:  hovered ? "rgba(255,255,255,0.12)" : "var(--border)",
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10,
              border: "1px solid",
              padding: "3px 8px",
              borderRadius: 2,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
