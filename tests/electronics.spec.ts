import{test,expect} from '../fixtures/basefixture';
test('ElectronicsPage Test', async ({ page,electronicsPage }) => {

    // Session comes from the saved storage state created by tests/auth.setup.ts.
    await page.goto('https://shop.qaautomationlabs.com/electronics.php');
    await electronicsPage.clickSamsungMobile();
    await expect(page).toHaveURL(/product\.php\?id=61/);
    await electronicsPage.addToCart();
    await expect(page.getByRole('link', { name: /Cart/ })).toContainText('1');
})