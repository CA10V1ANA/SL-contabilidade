"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, contactHref } from "@/config/site";
import { Logo } from "./shared";
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 900px)");
    const resize = () => { if (media.matches) dialog.current?.close(); };
    media.addEventListener("change", resize);
    return () => { document.body.style.overflow = previous; media.removeEventListener("change", resize); };
  }, [open]);
  function close(href?: string) {
    dialog.current?.close();
    if (href?.startsWith("#")) {
      requestAnimationFrame(() => { const target = document.querySelector<HTMLElement>(href); target?.focus({ preventScroll: true }); target?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }); });
    }
  }
  return <header className={`header ${scrolled ? "compact" : ""}`}>
    <div className="container header-inner"><Logo /><nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}</nav><a className="button header-cta" href={contactHref()}>Vamos conversar <ArrowUpRight size={17} aria-hidden="true" /></a><button ref={trigger} className="menu-trigger" aria-label="Abrir menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => { dialog.current?.showModal(); setOpen(true); }}><Menu aria-hidden="true" /></button></div>
    <dialog ref={dialog} id="mobile-menu" className="mobile-menu" aria-label="Menu de navegação" onClose={() => { setOpen(false); trigger.current?.focus(); }}>
      <div className="mobile-menu-top"><Logo onClick={() => close("#inicio")} /><button className="menu-trigger" aria-label="Fechar menu" onClick={() => close()} autoFocus><X aria-hidden="true" /></button></div>
      <nav aria-label="Navegação móvel">{navigation.map((link, index) => <a key={link.href} href={link.href} onClick={() => close(link.href)}><span>0{index + 1}</span>{link.label}<ArrowUpRight aria-hidden="true" /></a>)}</nav>
      <a className="button" href={contactHref()} onClick={() => close(contactHref())}>Vamos conversar <ArrowUpRight size={18} aria-hidden="true" /></a>
      <p>Contabilidade próxima.<br />Espaço para crescer.</p>
    </dialog>
  </header>;
}
