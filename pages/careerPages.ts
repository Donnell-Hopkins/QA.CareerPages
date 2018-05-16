//import {$, by, element, ElementFinder} from "protractor";
import {$, by, element} from "protractor";

export class CareerPageObject {
    public customerSiteHeader: any;
    public customerSiteHomeButton: any;
    public customerSiteIntroLogo: any;
    public customerSiteIntroCopy: any;
    public customerSiteSection: any;
    public customerSiteTestimonialSection: any;
    public customerSiteSearchGEOBut: any;
    public customerSiteSearchLocation: any;
    public customerSiteSearchButton: any;
    public customerSiteSearchViewBut: any;
    public customerSiteSearchRadius: any;
    public customerSiteSearchJobsBar: any;
    public customerSiteSearchResultsHeader: any;
    public customerSiteJobs: any;
    public customerSiteJobTitle: any;
    public customerSiteJobDistance: any;
    public customerSiteJobLocation: any;
    public customerSiteJobCategory: any;
    public customerSiteShareButton: any;
    public customerSiteApplyButton: any;
    public customerSiteApplyButtons: any;
    public customerSiteApplyBtnClick: any;
    public customerSiteSomeBullshit: any;
    public customerSitePaginationSection: any;
    //public customerSitePaginationButton: any;
    public customerSiteFooter: any;
    public customerSiteSocialMedia: any;
    public customerSiteFacebookIcon: any;
    public customerSiteYouTubeIcon: any;
    public customerSiteTwitterIcon: any;
    public customerSiteInstagramIcon: any;
    public customerSiteLinkedInIcon: any;
    public customerSiteFooterCopy: any;
    public customerSiteFooterContact: any;



    constructor() {

        //Career Pages Header Objects
        this.customerSiteHeader = element(by.tagName('header'));
        this.customerSiteHomeButton = element(by.buttonText('Home'));
        this.customerSiteIntroLogo = element(by.id('customer-site-intro-logo'));
        this.customerSiteIntroCopy = element(by.id('customer-site-intro-copy'));

        //Career Pages Body Objects
        this.customerSiteSection = element(by.tagName('customer-site-section'));
        this.customerSiteTestimonialSection = element(by.className('column-testimonial'));

        //Career Pages Search Section Objects
        this.customerSiteSearchGEOBut = element(by.className('input-group-addon Geolocation hidden-xs hidden-sm ng-tns-c7-3'));
        this.customerSiteSearchLocation = element(by.className('location'));
        this.customerSiteSearchViewBut = element(by.id('job-search-bar-view-toggle'));
        this.customerSiteSearchRadius = element(by.id('job-search-filters-select'));
        this.customerSiteSearchButton = element(by.className('input-group-addon ng-tns-c7-3'));

        //Career Pages Search Results Objects
        this.customerSiteSearchJobsBar = element(by.id('job-search-bar'));
        this.customerSiteSearchResultsHeader = element(by.tagName('search-results-header'));
        this.customerSiteJobs = element(by.name('job-listing'));
        this.customerSiteJobTitle = element(by.name('job-title'));
        this.customerSiteJobDistance = element(by.name('distance'));
        this.customerSiteJobLocation = element(by.name('location'));
        this.customerSiteJobCategory = element(by.name('category'));
        this.customerSiteSomeBullshit = element(by.name('some-bullshit'));
        this.customerSiteShareButton = element.all(by.buttonText('Share'));
        this.customerSiteApplyButtons = element.all(by.buttonText('Apply'));
        this.customerSiteApplyButton = element(by.buttonText('Apply'));
        this.customerSiteApplyBtnClick = element(by.buttonText('Apply')).click();
        this.customerSitePaginationSection = element(by.id('pagination-container'));

        //Career Pages Footer Objects
        this.customerSiteFooter = element(by.tagName('footer'));
        this.customerSiteSocialMedia = element(by.id('social-media-container'));
        this.customerSiteFacebookIcon = element(by.name('icon-facebook'));
        this.customerSiteYouTubeIcon = element(by.name('icon-youtube'));
        this.customerSiteTwitterIcon = element(by.name('icon-twitter'));
        this.customerSiteInstagramIcon = element(by.name('icon-instagram'));
        this.customerSiteLinkedInIcon = element(by.name('linkedin'));
        this.customerSiteFooterCopy = element(by.id('social-media-container'));
        this.customerSiteFooterContact = element(by.id('footer-contact-info'));
        //this.searchTextBox = $("#lst-ib");
        //this.searchButton = $("input[value='Google Search']");
    }
}
