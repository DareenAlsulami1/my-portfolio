import GlobalLayout from "@/components/GlobalLayout";
import ProjectCard from "@/components/ProjectCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";
import TerminalBlock from "@/components/TerminalBlock";
import { meta, stats, projects, experiences } from "@/data/portfolio";

/* ── Section wrapper ─────────────────────────── */
function Section({
  id,
  tag,
  title,
  titleAccent,
  children,
}: {
  id: string;
  tag: string;
  title: string;
  titleAccent: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} style={{ padding: "6rem 2rem", maxWidth: 900, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 6 }}>
        {tag}
      </p>
      <h2
        style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
          fontWeight: 700,
          marginBottom: "3rem",
          lineHeight: 1.2,
        }}
      >
        {title}
        <span style={{ color: "var(--accent)" }}>{titleAccent}</span>
      </h2>
      {children}
    </section>
  );
}

/* ── Hero grid background ────────────────────── */
function HeroGrid() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(124,108,250,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,250,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at 30% 50%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, black 30%, transparent 70%)",
      }}
    />
  );
}

/* ── Page ────────────────────────────────────── */
export default function Home() {
  return (
    <GlobalLayout>

      {/* ── HERO ──────────────────────────────── */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "6rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <HeroGrid />

        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span className="blink">{">"}</span>
          software_engineer.init()
        </p>

        <h1
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {meta.name}
          <span
            style={{
              display: "block",
              color: "transparent",
              WebkitTextStroke: "1px rgba(124,108,250,0.5)",
            }}
          >
            {meta.role}
          </span>
        </h1>

        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            maxWidth: 520,
            marginBottom: "2.5rem",
            lineHeight: 1.8,
          }}
        >
          Building scalable systems at the intersection of backend reliability and frontend craft.
          Fluent in{" "}
          <code
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--accent2)",
              background: "rgba(61,214,172,0.1)",
              padding: "1px 5px",
              borderRadius: 3,
            }}
          >
            Django
          </code>
          ,{" "}
          <code
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--accent2)",
              background: "rgba(61,214,172,0.1)",
              padding: "1px 5px",
              borderRadius: 3,
            }}
          >
            Next.js
          </code>
          ,{" "}
          <code
            style={{
              fontFamily: "var(--mono)",
              fontSize: 13,
              color: "var(--accent2)",
              background: "rgba(61,214,172,0.1)",
              padding: "1px 5px",
              borderRadius: 3,
            }}
          >
            ASP.NET
          </code>{" "}
          — and shipping products that handle real load. Currently shipping meteorological infra at
          the National Center of Meteorology.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            data-cursor="navigate()"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.05em",
              padding: "10px 22px",
              borderRadius: 3,
              textDecoration: "none",
              background: "var(--accent)",
              color: "#fff",
              border: "1px solid var(--accent)",
              transition: "all 0.2s",
            }}
          >
            git log --projects
          </a>
          <a
            href="#contact"
            data-cursor="navigate()"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.05em",
              padding: "10px 22px",
              borderRadius: 3,
              textDecoration: "none",
              background: "transparent",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              transition: "all 0.2s",
            }}
          >
            ssh dareen@contact
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="flex flex-wrap gap-10 mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--mono)", fontSize: "1.8rem", fontWeight: 700 }}>
                {s.num}
              </div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TERMINAL SNAPSHOT ─────────────────── */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem" }}>
        <TerminalBlock
          lines={[
            { type: "comment", text: "build profile" },
            { type: "command", cmd: "whoami" },
            { type: "output", text: `${meta.name.toLowerCase().replace(" ", "_")} — software engineer, jeddah sa` },
            { type: "command", cmd: "cat education.txt" },
            { type: "output", text: meta.education },
            { type: "command", cmd: "echo $STATUS" },
            { type: "output", text: meta.currentRole },
            { type: "cursor" },
          ]}
        />
      </div>

      {/* ── EXPERIENCE ────────────────────────── */}
      <Section id="experience" tag="// work history" title="Experience" titleAccent=".log">
        <ExperienceTimeline experiences={experiences} />
      </Section>

      {/* ── PROJECTS ──────────────────────────── */}
      <Section id="projects" tag="// selected work" title="Projects" titleAccent="[]">
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* ── SKILLS ────────────────────────────── */}
      <Section id="skills" tag="// technical stack" title="Skills" titleAccent="{}">
        <SkillsGrid />
      </Section>

      {/* ── CONTACT ───────────────────────────── */}
      <section id="contact" style={{ padding: "6rem 2rem", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 6 }}>
          // reach out
        </p>
        <h2
          style={{
            fontFamily: "var(--mono)",
            fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          Let&apos;s <span style={{ color: "var(--accent)" }}>Connect()</span>
        </h2>
        <TerminalBlock
          className="text-left"
          lines={[
            { type: "command", cmd: "curl dareen.contact" },
            { type: "comment", text: "email" },
            { type: "output", text: meta.email },
            { type: "comment", text: "phone" },
            { type: "output", text: meta.phone },
            { type: "comment", text: "location" },
            { type: "output", text: meta.location },
            { type: "cursor" },
          ]}
        />
      </section>

    </GlobalLayout>
  );
}
