import{test,expect}from "../fixtures/basefixture";

// This test exercises the login form itself, so it must start logged out
// instead of inheriting the saved session from tests/auth.setup.ts.
test.use({ storageState: { cookies: [], origins: [] } });

test("login Test",async({page,loginPage})=>{
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    if (!email || !password) {
        throw new Error('TEST_EMAIL and TEST_PASSWORD must be set. See .env.example.');
    }

    await page.goto("https://shop.qaautomationlabs.com/");
    await loginPage.Login(email, password);
    await expect(page).toHaveURL("https://shop.qaautomationlabs.com/shop.php");
})
