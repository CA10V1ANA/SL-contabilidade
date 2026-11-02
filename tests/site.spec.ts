import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
for (const width of [390, 768, 1440]) {
  test(`layout e acessibilidade em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("direção");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const id of ["solucoes", "a-sl", "coworking", "duvidas", "contato"]) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    await page.screenshot({ path: `docs/screenshots/home-${width}.png`, fullPage: true });
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(accessibility.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test("acordeões, galeria e destinos de contato", async ({ page }) => {
  await page.goto("/");
  const accounting = page.getByRole("button", { name: "02 Cuidar da contabilidade" });
  await accounting.click();
  await expect(accounting).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Converse sobre sua contabilidade" })).toBeVisible();
  await accounting.press("Enter");
  await expect(accounting).toHaveAttribute("aria-expanded", "false");
  const faq = page.getByRole("button", { name: "Como solicitar uma proposta?" });
  await faq.focus(); await faq.press("Space");
  await expect(faq).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText("Entre em contato com a SL e compartilhe")).toBeVisible();
  await page.getByRole("button", { name: "Próxima imagem" }).click();
  await expect(page.locator(".gallery-controls")).toContainText("02 / 02");
  await page.getByRole("button", { name: "Imagem anterior" }).click();
  await expect(page.locator(".gallery-controls")).toContainText("01 / 02");
  for (const anchor of await page.locator('a[href^="#"]').all()) {
    const href = await anchor.getAttribute("href");
    expect(await page.locator(href!).count()).toBe(1);
  }
  await expect(page.getByRole("link", { name: "Conversar pelo WhatsApp" })).toHaveAttribute("href", /^https:\/\/wa\.me\/558533364534\?text=/);
  for (const anchor of await page.locator('a[href*="wa.me"]').all()) {
    const url = new URL((await anchor.getAttribute("href"))!);
    expect(url.pathname).toBe("/558533364534");
    expect(url.searchParams.get("text")).toMatch(/^Olá, SL!/);
  }
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(0);
  for (const anchor of await page.getByRole("link", { name: "Fale com a SL", exact: true }).all()) await expect(anchor).toHaveAttribute("href", /^https:\/\/wa\.me\/558533364534\?text=/);
});
test("menu móvel: foco, Escape, seleção e redimensionamento", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Fechar menu" })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  expect(await page.evaluate(() => !!document.activeElement?.closest("dialog"))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await dialog.getByRole("link", { name: "03 Coworking", exact: true }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#coworking")).toBeFocused();
  await trigger.click();
  await dialog.getByRole("link", { name: "SL Contabilidade e Coworking — início" }).click();
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#inicio")).toBeFocused();
  await trigger.click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(dialog).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe("hidden");
});
test("movimento reduzido e conteúdo sem JavaScript", async ({ browser, page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" }); await page.goto("/");
  expect(await page.locator("html").evaluate(el => getComputedStyle(el).scrollBehavior)).toBe("auto");
  const context = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await context.newPage();
  await staticPage.goto("http://127.0.0.1:3000");
  await expect(staticPage.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(staticPage.getByRole("heading", { name: "Perto do seu negócio." })).toBeVisible();
  await context.close();
});
