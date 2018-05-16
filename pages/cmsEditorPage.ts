import {$, by, element, ElementFinder} from "protractor";

export class CMSEditorPageObject {
    public cmsEditorCancelBut: any;
    public cmsEditorPreviewBut: any;
    public cmsEditorPublishBut: any;
    public cmsEditorThemeColor: any;
    public cmsEditorHeaderTitle: any;
    public cmsEditorBodyParagraph: any;
    public cmsEditorSiteName: any;
    public cmsEditorHomePageLink: any;
    public cmsEditorEditSiteURL: any;
    public cmsEditorUnpublishSite: any;
    public cmsEditorDeleteSite: any;
    public cmsEditorAddSectionBut: any;



    constructor() {
        this.cmsEditorCancelBut = element(by.className('btn'));
        this.cmsEditorPreviewBut = element(by.buttonText('Preview'));
        this.cmsEditorPublishBut = element(by.buttonText('Publish'));
        this.cmsEditorThemeColor = element(by.className('color-picker-select'));
        this.cmsEditorHeaderTitle = element(by.id('header-font'));
        this.cmsEditorBodyParagraph = element(by.id('body-font'));
        this.cmsEditorSiteName = element(by.className('ng-untouched ng-pristine ng-valid'));
        this.cmsEditorHomePageLink = element(by.id('homepage-link'));
        this.cmsEditorEditSiteURL = element(by.buttonText('Edit url'));
        this.cmsEditorUnpublishSite = element(by.buttonText('Unpublish site'));
        this.cmsEditorDeleteSite = element(by.buttonText('Delete site'));
        this.cmsEditorAddSectionBut = element(by.buttonText('Add a section'));

    }
}
