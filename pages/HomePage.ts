import {Page,Locator} from"@playwright/test";

export class HomePage{
    readonly page!:Page;
    readonly shopnowButton!:Locator;

    constructor(page:Page){
    this.page = page;
    this.shopnowButton = this.page.getByRole('link', {name: 'Shop Electronics'});
    }
    async clickshopnowButton() {
    await this.shopnowButton.click();
}
    
    
}