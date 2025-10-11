// e2e/template.spec.ts
// Template de tests E2E con Playwright https://github.com/DuskStarGITHUB/my-enterpise/wiki/Testing-E2E

import { test, expect } from "@playwright/test";

// Test Page Title
test("page has correct title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle("My Enterpise");
});
