"use client";

import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function LumenCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<Position>({ x: -200, y: -200 });
  const [trail, setTrail] = useState<Position>({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const animRef = useRef<number | null>(null);
  const targetRef = useRef<Position>({ x: -200, y: -200 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    const animate = () => {
      setTrail((prev) => ({
        x: prev.x + (targetRef.current.x - prev.x) * 0.1,
        y: prev.y + (targetRef.current.y - prev.y) * 0.1,
      }));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Large ambient glow — follows with lag */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          left: trail.x,
          top: trail.y,
          width: isHovering ? 300 : 220,
          height: isHovering ? 300 : 220,
          transform: "translate(-50%, -50%)",
          background: isHovering
            ? "radial-gradient(circle, rgba(160,100,255,0.25) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(120,80,255,0.18) 0%, transparent 70%)",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
          filter: "blur(2px)",
        }}
      />
      {/* Trail ring — slightly delayed */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[9999] rounded-full border"
        style={{
          left: trail.x,
          top: trail.y,
          width: isHovering ? 44 : 36,
          height: isHovering ? 44 : 36,
          transform: "translate(-50%, -50%)",
          borderColor: isHovering
            ? "rgba(200,160,255,0.8)"
            : "rgba(160,120,255,0.6)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
          mixBlendMode: "screen",
        }}
      />
      {/* Core dot — snaps directly to cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[10000] rounded-full"
        style={{
          left: pos.x,
          top: pos.y,
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          transform: "translate(-50%, -50%)",
          background: "rgba(220,190,255,0.95)",
          boxShadow: isHovering
            ? "0 0 12px 4px rgba(180,120,255,0.9)"
            : "0 0 8px 2px rgba(160,100,255,0.7)",
          transition: "width 0.15s ease, height 0.15s ease, box-shadow 0.15s ease",
        }}
      />
    </>
  );
}
