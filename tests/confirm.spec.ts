import{test,expect} from '../fixtures/basefixture';
test('confirmation Test', async ({page,loginPage,homePage,electronicsPage,checkoutPage,cartPage,confirmPage})=>{
                                       
     await page.goto("https://shop.qaautomationlabs.com/");                     
     await loginPage.Login("demo@demo.com","demo");                             
     await expect(page).toHaveURL("https://shop.qaautomationlabs.com/shop.php");

                                                           
      await page.goto('https://shop.qaautomationlabs.com/checkout.php');                                           
     // await checkoutPage.clickCheckout();                                                                        
      await checkoutPage.fillingAddress('A','S','P','AP@gmail.com',1234567890, 'xyz', 'KArnataka','Athani',123456);
      await checkoutPage.clickContinueButton();                                                                    
      await expect(page).toHaveURL("https://shop.qaautomationlabs.com/confirm.php");                               
   
   
    
    await page.goto('https://shop.qaautomationlabs.com/confirm.php');
    await confirmPage.clickPlaceOrder();
    await expect(page).toHaveURL('https://shop.qaautomationlabs.com/thanks.php');
   
})