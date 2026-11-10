import{test,expect} from '../fixtures/basefixture';
test('ElectronicsPage Test', async ({ page,loginPage,homePage,electronicsPage }) => {
    
   await page.goto('https://shop.qaautomationlabs.com/');
   await loginPage.Login('demo@demo.com', 'demo');
   await expect(page).toHaveURL(/shop\.php/);


    await page.goto('https://shop.qaautomationlabs.com/electronics.php');
    await electronicsPage.clickSamsungMobile();
    await expect(page).toHaveURL(/product\.php\?id=61/);
    await electronicsPage.addToCart();
    await expect(page.getByRole('link', { name: /Cart/ })).toContainText('1');
})