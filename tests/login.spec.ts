import { expect, test } from '../fixtures/basefixture';

test.use({ storageState: { cookies: [], origins: [] } });

test('login succeeds with valid credentials', async ({ page, loginPage }) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
        throw new Error('TEST_EMAIL and TEST_PASSWORD must be set. See .env.example.');
    }

    await page.goto('https://shop.qaautomationlabs.com/');
    await loginPage.Login(email, password);
    await expect(page.getByRole('button', { name: 'Logout' })).toBeVisible();
});
