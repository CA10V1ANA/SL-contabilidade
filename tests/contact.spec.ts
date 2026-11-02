import { test, expect } from "@playwright/test";
import { site, contactHref, hasWhatsApp, type ContactTopic } from "../src/config/site";
test("WhatsApp só é usado quando configurado e mantém mensagens por serviço", () => {
  const original = site.whatsapp;
  try {
    site.whatsapp = undefined;
    expect(contactHref()).toBe("#contato");
    site.whatsapp = "número não confirmado";
    expect(hasWhatsApp()).toBe(false);
    expect(contactHref()).toBe("#contato");
    // Fixture apenas para testar construção de URL; nunca publicada na configuração.
    site.whatsapp = "5511999999999";
    for (const topic of Object.keys(site.messages) as ContactTopic[]) {
      const link = new URL(contactHref(topic));
      expect(link.hostname).toBe("wa.me");
      expect(link.searchParams.get("text")).toBe(site.messages[topic]);
    }
  } finally { site.whatsapp = original; }
});
