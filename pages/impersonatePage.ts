import {$, by, element, ElementFinder} from "protractor";

export class ImpersonatePageObject {
    public impersonateSiteHeader: any;
    public impersonatePageTitle: any;
    public impersonateUsernameTitle: any;
    public impersonateUsernameField: any;
    public impersonatePasswordTitle: any;
    public impersonatePasswordField: any;
    public impersonateOwnerIdTitle: any;
    public impersonateOwnerIdField: any;
    public impersonateOwnerTypeTitle: any;
    public impersonateOwnerGOBut: any;
    public impersonateOwnerTMSBut: any;
    public impersonateOwnerSnagRecBut: any;
    public impersonateBillingAccountTitle: any;
    public impersonateBillingAccountField: any;
    public impersonateBrandTemplateTitle: any;
    public impersonateBrandTemplateField: any;
    public impersonateSignInBut: any;



    constructor() {
        this.impersonateSiteHeader = element(by.id('nav-desktop'));
        //this.impersonatePageTitle = $("");
        //this.impersonateUsernameTitle = $("username");
        this.impersonateUsernameField = element(by.id('username'));
        //this.impersonatePasswordTitle = $("password");
        this.impersonatePasswordField = element(by.id('password'));
        //this.impersonateOwnerIdTitle = $("");
        this.impersonateOwnerIdField = element(by.id('ownerId'));
        //this.impersonateOwnerTypeTitle = $("");
        this.impersonateOwnerGOBut = element(by.id('go-customer'));
        this.impersonateOwnerTMSBut = element(by.id('tms-customer'));
        this.impersonateOwnerSnagRecBut = element(by.id('snag-recruiting-customer'));
        //this.impersonateBillingAccountTitle = $("");
        this.impersonateBillingAccountField = element(by.id('billingAccountId'));
        //this.impersonateBrandTemplateTitle = $("");
        this.impersonateBrandTemplateField = element(by.id('brandTemplateId'));
        this.impersonateSignInBut = element(by.buttonText('Sign In'));


    }
}
