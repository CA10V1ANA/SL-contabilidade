"use client";
import { useRef, useEffect, type ReactNode } from "react";
import { animate, inView } from "motion";
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    return inView(ref.current, element => { animate(element, { transform: ["translateY(22px)", "translateY(0)"] }, { duration: .65, ease: [.2, .7, .3, 1] }); }, { margin: "0px 0px -45px 0px" });
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
