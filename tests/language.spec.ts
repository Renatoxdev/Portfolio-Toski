import { test, expect } from "@playwright/test";

test("Language choice translates pages, persists, and can be reversed", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Português (Brasil)", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.getByText("Artista digital", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Pausar apresentação de fundo" })).toBeVisible();
  await page.getByRole("link", { name: "Sobre", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Olá, sou Toski." })).toBeVisible();
  await expect(page.getByText("Design de personagens", { exact: true })).toBeVisible();
  await expect(page).toHaveTitle("Sobre — Toski");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await page.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Projetos", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "The Wandering Isle Projeto pessoal" }).click();
  await expect(page.getByRole("link", { name: "Todos os projetos" })).toBeVisible();
  await expect(page.locator(".next-project")).toContainText("Próximo projeto");
  await page.goto("/work");
  await page.getByRole("button", { name: "Ver Obra 2520", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator("#artwork-title")).toHaveText("Obra 2520");
  await page.getByRole("button", { name: "Fechar obra", exact: true }).click();
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: "Contato", exact: true })).toBeVisible();
  await expect(page.locator(".contact-note")).toContainText("seus prazos");
  await page.getByRole("button", { name: "English (England)", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.getByRole("heading", { name: "Contact", exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: "English (England)", exact: true })).toHaveAttribute("aria-pressed", "true");
});

test("Flags stay accessible on mobile and Portuguese renders from the saved cookie", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ viewport: { width: 375, height: 812 } });
  await context.addCookies([{ name: "toski-language", value: "pt-BR", url: baseURL! }]);
  const page = await context.newPage();
  for (const route of ["/", "/about", "/projects", "/work", "/contact"]) {
    await page.goto(`${baseURL}${route}`);
    await expect(page.getByRole("button", { name: "Português (Brasil)", exact: true })).toBeInViewport();
    await expect(page.getByRole("button", { name: "English (England)", exact: true })).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  }
  await page.getByRole("button", { name: "Menu +" }).click();
  await page.getByRole("link", { name: "Sobre", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Olá, sou Toski." })).toBeVisible();
  await context.close();
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  await noJS.addCookies([{ name: "toski-language", value: "pt-BR", url: baseURL! }]);
  const staticPage = await noJS.newPage();
  await staticPage.goto(`${baseURL}/about`);
  await expect(staticPage.getByRole("heading", { name: "Olá, sou Toski." })).toBeVisible();
  await noJS.close();
});
