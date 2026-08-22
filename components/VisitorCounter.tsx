"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data: { count: number | null }) => {
        if (cancelled || typeof data.count !== "number") return;

        const target = data.count;
        const start = Math.max(0, target - 40);
        const t0 = performance.now();
        const duration = 1200;
        let raf: number;

        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const e = 1 - Math.pow(1 - p, 3);
          setVisitors(Math.round(start + (target - start) * e));
          if (p < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
      })
      .catch(() => {
        // Silently ignore — the counter just won't render if the API is unreachable.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (visitors === null) return null;

  return (
    <div
      style={{
        fontFamily: "var(--font-cairo)",
        fontWeight: 900,
        fontSize: 32,
        color: "#e0b96f",
        direction: "ltr",
      }}
    >
      {visitors.toLocaleString("en-US")}
    </div>
  );
}
