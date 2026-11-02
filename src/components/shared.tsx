import { ArrowUpRight } from "lucide-react";
import { contactHref, type ContactTopic } from "@/config/site";
export function ContactLink({ children = "Fale com a SL", topic = "general", className = "" }: { children?: React.ReactNode; topic?: ContactTopic; className?: string }) {
  return <a className={`button ${className}`} href={contactHref(topic)}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
export function Logo({ onClick }: { onClick?: () => void } = {}) {
  return <a className="logo" href="#inicio" onClick={onClick} aria-label="SL Contabilidade e Coworking — início"><span className="logo-mark">SL</span><span className="logo-divider">/</span><span className="logo-caption">Contabilidade<br />& Coworking</span></a>;
}
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}
