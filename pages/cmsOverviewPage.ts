import {$, by, element, ElementFinder} from "protractor";

export class CMSOverviewPageObject {
    public cmsOverviewBackBut: any;
    //public customerSiteHeader: ElementFinder;
    //public cmsOverviewBackBut: any;
    public cmsOverviewVisitBut: any;
    public cmsOverviewEditBut: any;
    public cmsOverviewSiteTitle: any;
    public cmsOverviewSiteInfo: any;
    //public cmsOverviewSiteURL: any;



    constructor() {
        this.cmsOverviewBackBut = element(by.className('btn'));
        //this.cmsOverviewBackBut = element(by.id('#'));
        this.cmsOverviewVisitBut = element(by.className('btn btn-secondary'));
        this.cmsOverviewEditBut = element(by.className('btn btn-primary'));
        this.cmsOverviewSiteTitle = element(by.className('site-detail-title'));
        this.cmsOverviewSiteInfo = element(by.className('site-info col-sm-6'));
        //this.cmsOverviewSiteURL = element(by.className('#'));


    }
}
