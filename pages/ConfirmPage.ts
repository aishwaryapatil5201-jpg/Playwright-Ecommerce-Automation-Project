import{Page,Locator} from '@playwright/test';

export class ConfirmPage{
    readonly page!:Page;
    readonly confirmDetails!:Locator;
    readonly placeOrder!:Locator;

constructor(page:Page){
    this.page= page;
    this.confirmDetails = this.page.getByText('Confirm Your Details');
    this.placeOrder = this.page.getByRole('link',{name:'Place Order'});
}
async clickPlaceOrder(){
    await this.placeOrder.click();
}


}
