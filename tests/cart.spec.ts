import { expect, test } from '../fixtures/basefixture';

test('Click on cart link', async ({ page,cartPage }) => {

  // Session comes from the saved storage state created by tests/auth.setup.ts.
  await page.goto('https://shop.qaautomationlabs.com/shop.php');

  await cartPage.clickCart();
  await expect(page).toHaveURL(/cart\.php/);
});