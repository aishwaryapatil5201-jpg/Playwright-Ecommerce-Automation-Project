import { test, expect } from '../fixtures/basefixture';
test('HomePage Test', async ({ page, homePage, loginPage}) => {

    await page.goto('https://shop.qaautomationlabs.com/');

    await loginPage.Login('demo@demo.com', 'demo');

    await homePage.clickshopnowButton();

    await expect(page).toHaveURL(/electronics\.php/);
});