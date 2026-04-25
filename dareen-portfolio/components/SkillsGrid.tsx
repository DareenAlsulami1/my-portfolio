"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups } from "@/data/portfolio";

export default function SkillsGrid() {
  return (
    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
      {skillGroups.map((group, i) => (
        <SkillGroup key={group.label} group={group} index={i} />
      ))}
    </div>
  );
}

function SkillGroup({
  group,
  index,
}: {
  group: { label: string; items: string[] };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      style={{
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: 6,
        padding: "1.25rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 10,
          color: "var(--accent)",
          letterSpacing: "0.1em",
          marginBottom: "0.75rem",
        }}
      >
        {group.label}
      </p>
      <div className="flex flex-col gap-[6px]">
        {group.items.map((item) => (
          <div key={item} className="flex items-center gap-2" style={{ fontSize: 13, color: "var(--muted)" }}>
            <span
              style={{
                width: 4,
                height: 4,
                background: "var(--accent2)",
                borderRadius: "50%",
                flexShrink: 0,
              }}
            />
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
