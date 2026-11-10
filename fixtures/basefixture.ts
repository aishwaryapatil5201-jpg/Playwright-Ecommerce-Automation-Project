import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ElectronicsPage } from '../pages/ElectronicsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmPage } from '../pages/ConfirmPage';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    electronicsPage: ElectronicsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    confirmPage: ConfirmPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
          
    // Teardown
    console.log('Login test completed');
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
         console.log('HomePage  task completed');
    },

    electronicsPage: async ({ page }, use) => {
        await use(new ElectronicsPage(page));
         console.log('ElectronicsPage task completed');
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
        console.log('CartPage task completed');
    },

    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
        console.log('CheckoutPage task completed');
    },

    confirmPage: async ({ page }, use) => {
        await use(new ConfirmPage(page));
        console.log('ConfirmPage task completed');
    },

});

export { expect } from '@playwright/test';