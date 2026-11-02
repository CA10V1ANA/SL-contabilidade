export type ContactTopic = "general" | "opening" | "accounting" | "coworking";
export type Unit = { city: string; state: string; address?: string; hours?: string; phone?: string; mapUrl?: string };
export type SiteImage = { src: string; alt: string; width: number; height: number; caption: string; source: string };
export type Service = { id: ContactTopic; number: string; title: string; description: string; examples: string[]; action: string };
export type SiteConfig = {
  name: string; instagram: string; whatsapp?: string;
  messages: Record<ContactTopic, string>; units: Unit[]; services: Service[];
  images: { about: SiteImage; coworking: SiteImage[] };
  faq: { question: string; answer: string }[];
};
export const site: SiteConfig = {
  name: "SL Contabilidade & Coworking",
  instagram: "https://www.instagram.com/slcontabilidadeof/",
  // Apenas número confirmado como WhatsApp, no formato internacional, sem símbolos.
  whatsapp: "558533364534",
  messages: {
    general: "Olá, SL! Gostaria de conversar sobre as necessidades do meu negócio.",
    opening: "Olá, SL! Gostaria de orientação para abrir minha empresa.",
    accounting: "Olá, SL! Gostaria de conhecer os serviços contábeis e solicitar uma proposta.",
    coworking: "Olá, SL! Gostaria de consultar a disponibilidade de endereço fiscal ou sala de reunião.",
  },
  units: [{ city: "Horizonte", state: "CE" }, { city: "Pacajus", state: "CE" }],
  services: [
    { id: "opening", number: "01", title: "Abrir minha empresa", description: "Orientação para organizar os primeiros passos da formalização do seu negócio.", examples: ["Abertura de empresa", "Dúvidas sobre formalização", "Orientação inicial"], action: "Vamos tirar sua ideia do papel" },
    { id: "accounting", number: "02", title: "Cuidar da contabilidade", description: "Conheça o suporte contábil, fiscal e tributário da SL para a rotina da sua empresa.", examples: ["Serviços contábeis", "Fiscal e tributário", "Imposto de Renda"], action: "Converse sobre sua contabilidade" },
    { id: "coworking", number: "03", title: "Conhecer o coworking", description: "Consulte as opções de endereço fiscal e sala de reunião para encontrar o que faz sentido para o seu negócio.", examples: ["Endereço fiscal", "Sala de reunião", "Disponibilidade por unidade"], action: "Encontre seu próximo espaço" },
  ],
  images: {
    about: { src: "/images/conversation.webp", alt: "Pessoas conversando em um ambiente de trabalho, em fotografia ilustrativa", width: 1400, height: 1000, caption: "Imagem ilustrativa · não representa a equipe da SL", source: "https://images.unsplash.com/photo-1521737711867-e3b97375f902" },
    coworking: [
      { src: "/images/meeting.webp", alt: "Ambiente de trabalho com mesas e iluminação natural, em fotografia ilustrativa", width: 1400, height: 1000, caption: "Imagem ilustrativa · não representa as instalações da SL", source: "https://images.unsplash.com/photo-1497366811353-6870744d04b2" },
      { src: "/images/office.webp", alt: "Escritório amplo com mesas e plantas, em fotografia ilustrativa", width: 1400, height: 1000, caption: "Imagem ilustrativa · não representa as instalações da SL", source: "https://images.unsplash.com/photo-1497366754035-f200968a6e72" },
    ],
  },
  faq: [
    { question: "Como conversar com a equipe?", answer: "Use o canal disponível na seção de contato para conversar com a SL. Conte o que precisa e informe a cidade de seu interesse para que a equipe possa orientar o próximo passo." },
    { question: "Como solicitar uma proposta?", answer: "Entre em contato com a SL e compartilhe sua atividade e o tipo de apoio que procura. A equipe poderá entender sua necessidade e apresentar as condições de atendimento." },
    { question: "Como conhecer o coworking?", answer: "Fale com a SL para consultar as opções de endereço fiscal e sala de reunião, a unidade de atendimento e a possibilidade de uma visita. O contato é uma solicitação de informações, não uma reserva." },
    { question: "Os serviços estão disponíveis nas duas cidades?", answer: "Consulte a equipe sobre o serviço e a unidade de seu interesse. A disponibilidade de cada opção deve ser confirmada diretamente com a SL." },
  ],
};
export function hasWhatsApp() { return !!site.whatsapp && /^[1-9]\d{7,14}$/.test(site.whatsapp); }
export function contactHref(topic: ContactTopic = "general") {
  return hasWhatsApp()
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.messages[topic])}`
    : "#contato";
}
export const navigation = [
  { href: "#solucoes", label: "Soluções" }, { href: "#a-sl", label: "A SL" },
  { href: "#coworking", label: "Coworking" }, { href: "#contato", label: "Contato" },
];
