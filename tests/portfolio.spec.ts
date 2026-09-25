import { test, expect } from "@playwright/test";
for (const width of [375, 768, 1440]) {
  test(`Pages render without horizontal overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of [
      "/",
      "/work",
      "/projects",
      "/projects/the-wandering-isle",
      "/about",
      "/contact",
    ]) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toBeVisible();
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      const images = page.locator("img:visible");
      for (const img of await images.all()) {
        await img.scrollIntoViewIfNeeded();
        await expect(img).toHaveJSProperty("complete", true);
        expect(
          await img.evaluate((el) => (el as HTMLImageElement).naturalWidth),
        ).toBeGreaterThan(0);
      }
    }
  });
}
test("Artwork keyboard navigation and focus restoration", async ({
  page,
}) => {
  await page.goto("/work");
  await expect(page.locator(".artwork-card")).toHaveCount(7);
  const opener = page.getByRole("button", { name: "View Artwork 2520" });
  await opener.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#artwork-title")).toHaveText("Artwork 2521");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(opener).toBeFocused();
  await expect(page.locator(".artwork-card")).toHaveCount(7);
});
test("Mobile navigation and next project", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/work");
  await page.getByRole("button", { name: "Menu +" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL("/projects");
  await page
    .getByRole("link", { name: "The Wandering Isle Personal project" })
    .click();
  await expect(page.locator("h1")).toHaveText("The Wandering Isle");
  await page.locator(".next-project").click();
  await expect(page.locator("h1")).toHaveText("Amberlane");
});
test("Core content and mobile links remain available without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 375, height: 812 },
  });
  const page = await context.newPage();
  await page.goto(`${baseURL}/about`);
  await expect(
    page.getByRole("heading", { name: "Hi, I’m Toski." }),
  ).toBeVisible();
  await expect(
    page
      .getByRole("navigation")
      .getByRole("link", { name: "Gallery", exact: true }),
  ).toBeVisible();
  await context.close();
});
test("Unknown projects return 404", async ({ page }) => {
  const response = await page.goto("/projects/unknown-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("link", { name: "Back to work" })).toBeVisible();
});
