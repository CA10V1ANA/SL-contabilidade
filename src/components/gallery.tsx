"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { SiteImage } from "@/config/site";
export function Gallery({ images }: { images: SiteImage[] }) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  if (!images.length) return null;
  const current = images[index];
  return <div className="gallery" role="region" aria-roledescription="carrossel" aria-label="Ambientes ilustrativos de coworking">
    <div className="gallery-photo"><motion.div key={current.src} initial={{ opacity: .6 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : .3 }}><Image src={current.src} alt={current.alt} fill sizes="(max-width: 899px) 100vw, 60vw" /></motion.div><span className="photo-tag tag-top">Endereço fiscal</span><span className="photo-tag tag-bottom">Sala de reunião</span></div>
    <div className="gallery-footer"><p>{current.caption}</p>{images.length > 1 ? <div className="gallery-controls"><button aria-label="Imagem anterior" onClick={() => setIndex((index + images.length - 1) % images.length)}><ArrowLeft size={18} aria-hidden="true" /></button><span aria-live="polite" aria-atomic="true">0{index + 1} / 0{images.length}</span><button aria-label="Próxima imagem" onClick={() => setIndex((index + 1) % images.length)}><ArrowRight size={18} aria-hidden="true" /></button></div> : null}</div>
  </div>;
}
