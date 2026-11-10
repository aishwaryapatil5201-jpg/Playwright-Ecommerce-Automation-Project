import{Page,Locator} from '@playwright/test';

export class CheckoutPage{
    readonly page!:Page;
   // readonly checkout!:Locator;
    readonly firstName!:Locator;
    readonly middleName!:Locator;
    readonly lastName!:Locator;
    readonly email!:Locator;
    readonly mobileNo!:Locator;
    readonly address!:Locator;
    readonly state!:Locator;
    readonly city!: Locator;
    readonly pinCode!:Locator;
    readonly continueButton!: Locator;

    constructor(page:Page){
        this.page = page;
        //this.checkout = this.page.getByRole('link',{name:'Checkout'});
        this.firstName = this.page.getByPlaceholder('Enter First Name');
        this.middleName = this.page.getByPlaceholder('Enter Middle Name');
        this.lastName =this.page.getByPlaceholder('Enter Last Name');
        this.email = this.page.getByPlaceholder('example@email.com');
        this.mobileNo = this.page.getByTitle('Mobile No.');
        this.address = this.page.getByPlaceholder('Enter Address');
        this.state = this.page.getByPlaceholder('Enter State');
        this.city = this.page.getByPlaceholder('Enter City');
        this.pinCode = this.page.getByPlaceholder('Enter Pin Code');
        this.continueButton = this.page.getByRole('button',{name:'Continue'});
    }
    //async clickCheckout(){
        //await this.checkout.click();
    //}
    async fillingAddress(
        firstName: string,
        middleName: string,
        lastName: string,
        email: string,
        mobileNo: string | number,
        address: string,
        state: string,
        city: string,
        pincode: string | number
    ) {
        await this.firstName.fill(firstName);
        await this.middleName.fill(middleName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.mobileNo.fill(String(mobileNo));
        await this.address.fill(address);
        await this.state.fill(state);
        await this.city.fill(city);
        await this.pinCode.fill(String(pincode));
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }
}
