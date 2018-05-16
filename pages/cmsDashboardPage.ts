import {$, by, element, ElementFinder} from "protractor";

export class CMSDashboardPageObject {
    public customerSiteHeader: any;
    //public customerSiteHeader: ElementFinder;
    public customerSiteHomeButton: any;
    public customerSiteIntroLogo: any;
    public customerSiteIntroCopy: any;
    public customerSiteSection: any;
    public customerSiteSearchGEOBut: any;
    public customerSiteSearchLocation: any;
    public customerSiteSearchButton: any;
    public customerSiteJobs: any;
    public customerSiteJobTitle: any;
    public customerSiteJobDistance: any;
    public customerSiteJobLocation: any;
    public customerSiteJobCategory: any;
    public customerSiteApplyButton: any;
    public customerSiteSomeBullshit: any;
    public customerSitePaginationSection: any;
    public customerSitePaginationButton: any;
    public customerSiteFooter: any;
    public customerSiteSocialMedia: any;
    public customerSiteFooterContact: any;


    constructor() {
        //this.customerSiteHeader = element(by.className('col-sm-12'));
        //this.customerSiteHeader = element(by.tagName('head'));
        /*this.customerSiteHeader = $("col-sm-12");
         this.customerSiteHomeButton = $("button[value='Home']");
         //this.customerSiteHomeButton = element(by.buttonText('Home'));
         this.customerSiteIntroLogo = $("customer-site-intro-logo");
         this.customerSiteIntroCopy = $("customer-site-intro-copy");
         this.customerSiteSection = $("container-fluid section-container");
         this.customerSiteSearchGEOBut = $("input-group-addon geolocation hidden-xs hidden-sm ng-tns-c7-3");
         this.customerSiteSearchLocation = $("form-control ng-tns-c7-3 ng-untouched ng-pristine ng-invalid");
         this.customerSiteSearchButton = $("input-group-addon ng-tns-c7-3");
         this.customerSiteJobs = $("job-listing");
         this.customerSiteJobTitle = $("job-title");
         this.customerSiteJobLocation = $("location");
         this.customerSiteJobCategory = $("category");
         //this.customerSiteApplyButton = element(by.class('apply-button'));
         this.customerSiteApplyButton = $("button[value='Apply']");
         this.customerSitePaginationSection = $("pagination-container");
         this.customerSitePaginationButton = $("show-for-sr");
         this.customerSiteFooter = $("footer");
         this.customerSiteSocialMedia = $("social-media-container");
         this.customerSiteFooterContact = $("footer-contact-info");
         //this.searchTextBox = $("#lst-ib");
         //this.searchButton = $("input[value='Google Search']");*/

        /*this.customerSiteHomeButton = element(by.css('[value="Home"]'));
         //this.customerSiteHomeButton = element(by.buttonText('Home'));*/
        this.customerSiteHeader = element(by.className('col-sm-12'));
        this.customerSiteHomeButton = element(by.buttonText('Home'));
        this.customerSiteIntroLogo = element(by.id('customer-site-intro-logo'));
        this.customerSiteIntroCopy = element(by.className('customer-site-intro-copy'));
        this.customerSiteSection = element(by.className('container-fluid section-container'));
        this.customerSiteSearchGEOBut = element(by.className('input-group-addon geolocation hidden-xs hidden-sm ng-tns-c7-3'));
        this.customerSiteSearchLocation = element(by.className('form-control ng-tns-c7-3 ng-untouched ng-pristine ng-invalid'));
        this.customerSiteSearchButton = element(by.className('input-group-addon ng-tns-c7-3'));
        this.customerSiteJobs = element(by.className('job-listing'));
        this.customerSiteJobTitle = element(by.className('job-title'));
        this.customerSiteJobDistance = element(by.className('distance'));
        this.customerSiteJobLocation = element(by.className('location'));
        this.customerSiteJobCategory = element(by.className('category'));
        this.customerSiteSomeBullshit = element(by.className('some-bullshit'));
        //this.customerSiteApplyButton = $('.apply-button');
        //this.customerSiteApplyButton = element(by.css('.apply-button button'));
        //this.customerSiteApplyButton = element(by.className('.apply-button'));
        this.customerSiteApplyButton = element.all(by.buttonText('Apply'));
        //this.customerSiteApplyButton = element(by.css('.apply-button')).element(by.tagName('button'));
        //this.customerSiteApplyButton = element(by.tagName('button'));
        //this.customerSiteApplyButton = $("button[value='Apply']");
        this.customerSitePaginationSection = element(by.id('pagination-container'));
        this.customerSitePaginationButton = element(by.className('show-for-sr'));
        this.customerSiteFooter = element(by.tagName('footer'));
        this.customerSiteSocialMedia = element(by.id('social-media-container'));
        this.customerSiteFooterContact = element(by.id('footer-contact-info'));
        //this.searchTextBox = $("#lst-ib");
        //this.searchButton = $("input[value='Google Search']");
    }
}
