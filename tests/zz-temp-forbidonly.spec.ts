import { test, expect } from '@playwright/test';

test.only('temp only marker', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
