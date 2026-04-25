"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Experience } from "@/data/portfolio";

interface Props {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: Props) {
  return (
    <div className="relative pl-8">
      {/* Vertical rail */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 1,
          background:
            "linear-gradient(to bottom, transparent, var(--accent) 10%, var(--accent) 90%, transparent)",
        }}
      />

      {experiences.map((exp, i) => (
        <TimelineItem key={i} exp={exp} index={i} />
      ))}
    </div>
  );
}

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-12"
    >
      {/* Dot on the rail */}
      <div
        style={{
          position: "absolute",
          left: "-2.35rem",
          top: 5,
          width: 9,
          height: 9,
          background: "var(--accent)",
          borderRadius: "50%",
          boxShadow: "0 0 12px var(--accent)",
        }}
      />

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-4 mb-1"
        style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)" }}
      >
        <span style={{ color: "var(--accent2)" }}>{exp.period}</span>
        {exp.location && <span>{exp.location}</span>}
      </div>

      {/* Role */}
      <p style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{exp.role}</p>

      {/* Company */}
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 12,
          color: "var(--accent)",
          marginBottom: "0.75rem",
        }}
      >
        // {exp.company}
      </p>

      {/* Bullets */}
      <ul className="flex flex-col gap-1 list-none">
        {exp.bullets.map((b, bi) => (
          <li
            key={bi}
            className="relative pl-5"
            style={{ fontSize: 14, color: "var(--muted)" }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--accent)",
                top: 2,
              }}
            >
              //
            </span>
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
