import { useEffect, useRef, type CSSProperties } from "react";

const cubes = [
  { x: 8, y: 18, s: 72, r: 18, d: 18 },
  { x: 78, y: 12, s: 54, r: -22, d: 28 },
  { x: 88, y: 48, s: 96, r: 12, d: 14 },
  { x: 6, y: 62, s: 48, r: -14, d: 22 },
  { x: 42, y: 8, s: 36, r: 28, d: 32 },
  { x: 62, y: 70, s: 80, r: -8, d: 16 },
  { x: 22, y: 82, s: 44, r: 20, d: 26 },
  { x: 70, y: 32, s: 40, r: -30, d: 20 },
];

export function CubeField() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const el = ref.current;
    if (!el || !fine.matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${(e.clientX - r.left) / r.width - 0.5}`);
      el.style.setProperty("--my", `${(e.clientY - r.top) / r.height - 0.5}`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="cube-field" ref={ref} aria-hidden>
      {cubes.map((c, i) => (
        <span
          key={i}
          className="cube"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.s,
            height: c.s,
            "--r": `${c.r}deg`,
            "--d": `${c.d}`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
