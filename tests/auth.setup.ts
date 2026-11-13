import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

const email = process.env.TEST_EMAIL;
const password = process.env.TEST_PASSWORD;

setup('authenticate', async ({ page }) => {
  if (!email || !password) {
    throw new Error(
      'TEST_EMAIL and TEST_PASSWORD must be set. Add them to your .env file ' +
        '(see .env.example) or as CI secrets; do not commit real credentials.',
    );
  }

  await page.goto('https://shop.qaautomationlabs.com/');

  const loginPage = new LoginPage(page);
  await loginPage.Login(email, password);

  // Prove the session is real before saving it, so a broken login fails here
  // instead of leaving every test with a confusing logged-out state.
  await expect(page).toHaveURL(/shop\.php/);
  await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();

  await page.context().storageState({ path: authFile });
});
