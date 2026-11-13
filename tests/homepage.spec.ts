import { test, expect } from '../fixtures/basefixture';
test('HomePage Test', async ({ page, homePage }) => {

    // Session comes from the saved storage state created by tests/auth.setup.ts.
    await page.goto('https://shop.qaautomationlabs.com/shop.php');

    await homePage.clickshopnowButton();

    await expect(page).toHaveURL(/electronics\.php/);
});