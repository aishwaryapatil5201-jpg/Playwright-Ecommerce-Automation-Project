import{Page,Locator} from '@playwright/test';

export class CartPage{
    readonly page!:Page;
    readonly cart!:Locator;

    constructor(page:Page){
        this.page = page;
        this.cart = this.page.getByRole('link',{name:'Cart'});
    }
    async clickCart(){
        await this.cart.click();
    }
}