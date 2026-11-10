import { expect, test } from '../fixtures/basefixture';

test('Click on cart link', async ({ page,loginPage,homePage,electronicsPage,cartPage }) => {

  await page.goto('https://shop.qaautomationlabs.com/');
  await loginPage.Login('demo@demo.com', 'demo');
  await expect(page).toHaveURL('https://shop.qaautomationlabs.com/shop.php');

  await cartPage.clickCart();
  await expect(page).toHaveURL(/cart\.php/);
});