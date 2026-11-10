import{test,expect} from '../fixtures/basefixture';
import { checkoutData } from '../test-data/checkoutData';
test('Checkout Test', async ({ page, loginPage, homePage, electronicsPage, cartPage, checkoutPage }) => {
                                     
   await page.goto('https://shop.qaautomationlabs.com/');                     
   await loginPage.Login('demo@demo.com', 'demo');                            
   await expect(page).toHaveURL('https://shop.qaautomationlabs.com/shop.php');
   

    await page.goto('https://shop.qaautomationlabs.com/checkout.php');
   // await checkoutPage.clickCheckout();
    await checkoutPage.fillingAddress(
    checkoutData.firstName,
    checkoutData.middleName,
    checkoutData.lastName,
    checkoutData.email,
    checkoutData.mobileNo,
    checkoutData.address,
    checkoutData.state,
    checkoutData.city,
    checkoutData.pincode
);
    await checkoutPage.clickContinueButton();
    await expect(page).toHaveURL("https://shop.qaautomationlabs.com/confirm.php");

})