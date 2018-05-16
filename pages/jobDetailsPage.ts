//import {$, by, element, ElementFinder} from "protractor";
import {$, by, element} from "protractor";

export class JobDetailsPageObject {
    public customerSiteHeader: any;
    public customerSiteBackButton: any;
    public customerSiteJobs: any;
    public customerSiteJobTitle: any;
    public customerSiteJobPosting: any;
    public customerSiteShareButton: any;
    public customerSiteApplyButton: any;
    public customerSiteFooter: any;
    public customerSiteSocialMedia: any;
    public customerSiteSocialMediaIcons: any;
    public customerSiteFacebookIcon: any;
    public customerSiteYouTubeIcon: any;
    public customerSiteTwitterIcon: any;
    public customerSiteInstagramIcon: any;
    public customerSiteLinkedInIcon: any;
    public customerSiteFooterCopy: any;


    constructor() {

        this.customerSiteHeader = element(by.tagName('header'));
        this.customerSiteBackButton = element(by.buttonText('Back'));
        this.customerSiteJobs = element(by.name('job-listing'));
        this.customerSiteJobTitle = element(by.name('detail-title'));
        this.customerSiteJobPosting = element(by.name('detail-posting'));
        this.customerSiteShareButton = element.all(by.buttonText('Share'));
        this.customerSiteApplyButton = element.all(by.buttonText('Apply via Snag'));
        this.customerSiteFooter = element(by.tagName('footer'));
        this.customerSiteSocialMedia = element(by.id('social-media-container'));
        this.customerSiteSocialMediaIcons = element(by.id('social-media-icons'));
        this.customerSiteFacebookIcon = element(by.name('icon-facebook'));
        this.customerSiteYouTubeIcon = element(by.name('icon-youtube'));
        this.customerSiteTwitterIcon = element(by.name('icon-twitter'));
        this.customerSiteInstagramIcon = element(by.name('icon-instagram'));
        this.customerSiteLinkedInIcon = element(by.name('icon-linkedin'));
        this.customerSiteFooterCopy = element(by.id('customer-site-footer-copy'));
    }
}
