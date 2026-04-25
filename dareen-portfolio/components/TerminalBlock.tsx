"use client";

interface TerminalLine {
  type: "command" | "output" | "comment" | "cursor";
  cmd?: string;
  text?: string;
}

interface Props {
  lines: TerminalLine[];
  className?: string;
}

export default function TerminalBlock({ lines, className = "" }: Props) {
  return (
    <div
      className={className}
      style={{
        background: "#0d0d14",
        border: "1px solid var(--border)",
        borderRadius: 6,
        padding: "1.25rem 1.5rem",
        fontFamily: "var(--mono)",
        fontSize: 12,
      }}
    >
      {/* Window chrome */}
      <div className="flex gap-[6px] mb-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <span className="rounded-full" style={{ width: 10, height: 10, background: "#ff5f57" }} />
        <span className="rounded-full" style={{ width: 10, height: 10, background: "#febc2e" }} />
        <span className="rounded-full" style={{ width: 10, height: 10, background: "#28c840" }} />
      </div>

      {lines.map((line, i) => {
        if (line.type === "comment") {
          return (
            <p key={i} style={{ color: "#444460", marginBottom: 2 }}>
              # {line.text}
            </p>
          );
        }
        if (line.type === "command") {
          return (
            <p key={i} style={{ marginBottom: 2 }}>
              <span style={{ color: "var(--accent2)" }}>$ </span>
              <span style={{ color: "var(--text)" }}>{line.cmd}</span>
            </p>
          );
        }
        if (line.type === "output") {
          return (
            <p key={i} style={{ color: "var(--text)", marginLeft: "1rem", marginBottom: 6 }}>
              {line.text}
            </p>
          );
        }
        if (line.type === "cursor") {
          return (
            <p key={i} className="blink" style={{ color: "var(--accent)", marginTop: 10 }}>
              ▊
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}
