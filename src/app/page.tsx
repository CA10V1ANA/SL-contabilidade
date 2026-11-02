import Image from "next/image";
import { ArrowDown, ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { site, navigation, contactHref, hasWhatsApp } from "@/config/site";
import { Header } from "@/components/header";
import { Logo, ContactLink, SectionLabel } from "@/components/shared";
import { DirectionArtwork } from "@/components/direction-artwork";
import { Accordion } from "@/components/accordion";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
export default function Home() {
  return <>
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <Header />
    <main id="conteudo">
      <section id="inicio" className="hero" tabIndex={-1} aria-labelledby="hero-title">
        <div className="container hero-inner">
          <div className="hero-copy"><p className="eyebrow"><span /> Seu negócio, na direção certa.</p><h1 id="hero-title">Dê <span>direção</span><br />{" "}ao seu<br />{" "}negócio.</h1><p className="hero-description">Contabilidade próxima.<br className="mobile-break" /> Espaço para crescer.</p><div className="hero-actions"><ContactLink /><a href="#solucoes" className="subtle-link">Conheça nossas soluções <ArrowDown size={16} aria-hidden="true" /></a></div></div>
          <DirectionArtwork />
          <div className="hero-location"><p>Contabilidade +<br />{" "}Coworking</p><span>Horizonte / Pacajus</span></div>
          <span className="hero-index" aria-hidden="true">SEU PRÓXIMO PASSO COMEÇA AQUI ↗</span>
        </div>
      </section>
      <div className="yellow-band"><span>Da primeira ideia ao próximo passo.</span><ArrowUpRight aria-hidden="true" /></div>
      <section id="solucoes" className="section container solutions" tabIndex={-1} aria-labelledby="solutions-title">
        <Reveal className="section-intro"><SectionLabel>01 / Soluções</SectionLabel><h2 id="solutions-title">Qual é o seu<br />{" "}próximo<br />{" "}passo<span className="blue-text">?</span></h2><p>Um novo começo ou uma nova fase.<br />{" "}A SL caminha com você.</p></Reveal>
        <Reveal><Accordion services={site.services} /></Reveal>
      </section>
      <section id="a-sl" className="about" tabIndex={-1} aria-labelledby="about-title">
        <div className="container about-grid"><Reveal className="about-copy"><SectionLabel>02 / A SL</SectionLabel><h2 id="about-title">Pessoas<br />{" "}próximas.<br />{" "}Orientação<br />{" "}<span className="blue-text">clara.</span></h2><p>A SL reúne contabilidade e coworking para apoiar quem empreende, com atendimento próximo e atenção às necessidades de cada negócio.</p><ContactLink className="text-button">Conheça a SL de perto</ContactLink></Reveal><figure className="about-photo"><Image src={site.images.about.src} alt={site.images.about.alt} fill sizes="(max-width: 899px) 100vw, 60vw" /><figcaption>{site.images.about.caption}</figcaption><span className="photo-corner" aria-hidden="true">↗</span></figure></div>
      </section>
      <section id="coworking" className="coworking" tabIndex={-1} aria-labelledby="coworking-title">
        <div className="container coworking-grid"><Reveal className="coworking-copy"><SectionLabel>03 / Coworking</SectionLabel><h2 id="coworking-title">Seu<br />{" "}próximo<br />{" "}espaço<span>.</span></h2><p>Conheça a estrutura da SL e consulte as opções para o seu negócio.</p><ContactLink topic="coworking" className="button-outline">Consultar disponibilidade</ContactLink></Reveal><Reveal className="coworking-media"><Gallery images={site.images.coworking} /></Reveal></div>
      </section>
      <section id="duvidas" className="container section faq" tabIndex={-1} aria-labelledby="faq-title"><Reveal className="section-intro"><SectionLabel>04 / Dúvidas frequentes</SectionLabel><h2 id="faq-title">Vamos<br />{" "}simplificar<span className="blue-text">.</span></h2><p>Uma boa conversa é o primeiro passo.</p></Reveal><Reveal><Accordion questions={site.faq} /></Reveal></section>
      <section id="contato" className="contact" tabIndex={-1} aria-labelledby="contact-title"><div className="container"><div className="contact-grid"><Reveal><SectionLabel>05 / Onde estamos</SectionLabel><h2 id="contact-title">Perto do<br />{" "}seu negócio<span className="blue-text">.</span></h2></Reveal><div className="units">{site.units.map(unit => <article className="unit" key={unit.city}><div className="unit-heading"><h3>{unit.city}</h3><span>{unit.state} <MapPin size={18} aria-hidden="true" /></span></div>{unit.address ? <p>{unit.address}</p> : null}{unit.hours ? <p>{unit.hours}</p> : null}{unit.phone ? <a href={`tel:${unit.phone.replace(/[^+\d]/g, "")}`}>{unit.phone}</a> : null}{unit.mapUrl ? <a className="subtle-link" href={unit.mapUrl} target="_blank" rel="noopener noreferrer">Ver no mapa <ArrowUpRight size={16} aria-hidden="true" /></a> : null}</article>)}<p className="unit-note">Converse com a equipe sobre atendimento e disponibilidade em cada unidade.</p></div></div><div className="contact-channel"><div><p className="eyebrow">Toda boa parceria começa com uma conversa.</p><h3>Conte o que você precisa.</h3></div><a href={hasWhatsApp() ? contactHref() : site.instagram} className="button" target="_blank" rel="noopener noreferrer">{hasWhatsApp() ? "Conversar pelo WhatsApp" : <><MessageCircle size={18} aria-hidden="true" /> Converse pelo Instagram</>}<ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
      <section className="closing" aria-labelledby="closing-title"><div className="container closing-inner"><h2 id="closing-title">Vamos dar o<br />{" "}próximo passo<span>?</span></h2><ContactLink className="button-yellow" /></div><div className="closing-stripe" aria-hidden="true" /></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-main"><Logo /><nav aria-label="Navegação do rodapé">{navigation.map(link => <a key={link.href} href={link.href}>{link.label}</a>)}<a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight size={14} aria-hidden="true" /></a></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} {site.name}.</p><p>Contabilidade próxima. Espaço para crescer.</p></div></div></footer>
  </>;
}
