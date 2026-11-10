import {Page,Locator} from"@playwright/test";

export class ElectronicsPage{
    readonly page!:Page;
    readonly samsungMobile: Locator;
    readonly addToCartButton: Locator;


    constructor(page:Page){
        this.page = page;
        this.samsungMobile = this.page.getByRole('link', { name: 'Samsung Mobile' });
        this.addToCartButton = this.page.getByRole('button', { name: 'Add Samsung Mobile to cart' });
    
    }
    async clickSamsungMobile(){
        await this.samsungMobile.click();
  }
    async addToCart(){
        await this.addToCartButton.click();
    }
}