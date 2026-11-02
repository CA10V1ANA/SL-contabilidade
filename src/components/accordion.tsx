"use client";
import { useState, useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { type Service, type SiteConfig } from "@/config/site";
import { ContactLink } from "./shared";
export function Accordion({ services, questions }: { services?: Service[]; questions?: SiteConfig["faq"] }) {
  const [active, setActive] = useState<number | null>(services ? 0 : null);
  const base = useId();
  const reduced = useReducedMotion();
  const entries = services?.map(s => ({ title: s.title, description: s.description, service: s })) ?? questions?.map(q => ({ title: q.question, description: q.answer, service: undefined })) ?? [];
  return <div className={services ? "accordion services-accordion" : "accordion faq-accordion"}>{entries.map((entry, index) => {
    const expanded = active === index;
    const panel = `${base}-panel-${index}`;
    const button = `${base}-button-${index}`;
    return <div className={`accordion-item ${expanded ? "is-open" : ""}`} key={entry.title}>
      <h3><button id={button} aria-expanded={expanded} aria-controls={panel} onClick={() => setActive(expanded ? null : index)}>
        {entry.service ? <span className="service-number">{entry.service.number}</span> : null}
        <span className="accordion-title">{entry.title}{entry.service ? <ArrowUpRight className="service-arrow" aria-hidden="true" /> : null}</span>
        {expanded ? <Minus className="toggle-icon" size={19} aria-hidden="true" /> : <Plus className="toggle-icon" size={19} aria-hidden="true" />}
      </button></h3>
      <motion.div id={panel} role="region" aria-labelledby={button} aria-hidden={!expanded} inert={!expanded} initial={false} animate={{ height: expanded ? "auto" : 0 }} transition={{ duration: reduced ? 0 : .28, ease: [.25, .1, .25, 1] }} className="accordion-panel">
        <div className="accordion-body"><p>{entry.description}</p>{entry.service ? <><ul className="service-tags">{entry.service.examples.map(e => <li key={e}>{e}</li>)}</ul><ContactLink topic={entry.service.id} className="text-button">{entry.service.action}</ContactLink></> : null}</div>
      </motion.div>
    </div>;
  })}</div>;
}
