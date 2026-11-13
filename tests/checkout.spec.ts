import{test,expect} from '../fixtures/basefixture';
import { checkoutData } from '../test-data/checkoutData';
test('Checkout Test', async ({ page, checkoutPage }) => {

    // Session comes from the saved storage state created by tests/auth.setup.ts.
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