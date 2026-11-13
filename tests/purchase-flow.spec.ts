import { expect, test } from '../fixtures/basefixture';
import { checkoutData } from '../test-data/checkoutData';

test('complete purchase flow', async ({
  page,
  electronicsPage,
  cartPage,
  checkoutPage,
  confirmPage,
}) => {
  // Session comes from the saved storage state created by tests/auth.setup.ts.
  // Select a product and add it to the cart
  await page.goto('https://shop.qaautomationlabs.com/electronics.php');
  await electronicsPage.clickSamsungMobile();
  await expect(page).toHaveURL(/product\.php\?id=61/);
  await electronicsPage.addToCart();
  await expect(page.getByRole('link', { name: /Cart/ })).toContainText('1');

  // Verify the cart page
  await cartPage.clickCart();
  await expect(page).toHaveURL(/cart\.php/);
  await expect(page.getByText('Samsung Mobile')).toBeVisible();

  // Complete checkout
  await page.goto('https://shop.qaautomationlabs.com/checkout.php');
  await checkoutPage.fillingAddress(
    checkoutData.firstName,
    checkoutData.middleName,
    checkoutData.lastName,
    checkoutData.email,
    checkoutData.mobileNo,
    checkoutData.address,
    checkoutData.state,
    checkoutData.city,
    checkoutData.pincode,
  );
  await checkoutPage.clickContinueButton();

  // Verify the order review page
  await expect(page).toHaveURL(/confirm\.php/);
  await expect(confirmPage.confirmDetails).toBeVisible();
  await expect(page.getByText('Samsung Mobile')).toBeVisible();

  // Place the order and verify confirmation
  await confirmPage.clickPlaceOrder();
  await expect(page).toHaveURL(/thanks\.php/);
  await expect(page.getByTestId('order-success-title')).toHaveText(/Thank You for Your Order/i);
  await expect(page.getByTestId('order-success-message')).toHaveText(/placed successfully/i);
});
