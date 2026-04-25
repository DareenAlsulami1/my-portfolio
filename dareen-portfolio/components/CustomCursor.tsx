"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let ringX = 0;
    let ringY = 0;
    let curX = 0;
    let curY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${curX}px`;
        dotRef.current.style.top = `${curY}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${curX + 12}px`;
        labelRef.current.style.top = `${curY + 10}px`;
      }
    };

    const animate = () => {
      ringX += (curX - ringX) * 0.12;
      ringY += (curY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsHovering(true);
        setLabel((interactive as HTMLElement).dataset.cursor || "focus()");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsHovering(false);
        setLabel("");
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150"
        style={{
          width: isHovering ? 14 : 9,
          height: isHovering ? 14 : 9,
          background: isHovering ? "var(--accent2)" : "var(--accent)",
          mixBlendMode: "screen",
          left: 0,
          top: 0,
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          border: `1px solid ${isHovering ? "rgba(61,214,172,0.5)" : "rgba(124,108,250,0.35)"}`,
          transition: "width 0.25s, height 0.25s, border-color 0.25s",
          left: 0,
          top: 0,
        }}
      />
      {/* Label */}
      {label && (
        <div
          ref={labelRef}
          className="fixed pointer-events-none z-[9997] text-[10px] whitespace-nowrap"
          style={{
            fontFamily: "var(--mono)",
            color: "var(--accent)",
            left: 0,
            top: 0,
          }}
        >
          {label}
        </div>
      )}
    </>
  );
}
