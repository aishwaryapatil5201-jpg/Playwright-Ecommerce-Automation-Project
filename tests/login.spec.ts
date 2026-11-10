import{test,expect}from "../fixtures/basefixture";

test("login Test",async({page,loginPage})=>{
    await page.goto("https://shop.qaautomationlabs.com/");
    await loginPage.Login("demo@demo.com","demo");
    await expect(loginPage.page).toHaveURL("https://shop.qaautomationlabs.com/shop.php");
})
