import { browser, protractor } from "protractor";
import { CareerPageObject } from "../pages/careerPages";
import {async} from "q";
import {JobDetailsPageObject} from "../pages/jobDetailsPage";
const { Given, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const careerPage: CareerPageObject = new CareerPageObject();
const jobDetailsPage: JobDetailsPageObject = new JobDetailsPageObject();

Given(/^I am on career pages display site$/, async () => {

    /*function applyButton(){
        /!*var EC = protractor.ExpectedConditions;
        var applyButton = careerPage.customerSiteApplyButton;
        browser.wait(EC.elementToBeClickable(applyButton), 5000);*!/
        //expect(applyButton.isPresent())
        //(applyButton);
        var EC = protractor.ExpectedConditions;
        var applyButton = careerPage.customerSiteApplyButton;
        var isClickable = EC.elementToBeClickable(applyButton);
        browser.wait(isClickable, 5000);
        return applyButton.getWebElement();
    }

    applyButton();*/
/*


    var EC = protractor.ExpectedConditions;
    var applyButton = careerPage.customerSiteApplyButton;
    var isClickable = EC.elementToBeClickable(applyButton);
    browser.wait(isClickable, 7000);*/

    /*browser.manage().timeouts().implicitlyWait(0);
    browser.wait(function () {
        browser.sleep(2000);
        //return element(by.id('identifier1')).isDisplayed()
         return careerPage.customerSiteApplyButton.isDisplayed()
            .then(
                function (isDisplayed) {
                    return isDisplayed;
                },
                function (error) {
                    return false
                });
    }, 20 * 1000);*/

    //var EC = protractor.ExpectedConditions;
    //expect(browser.wait(EC.elementToBeClickable(careerPage.customerSiteApplyButton), 5000));
    //expect(browser.wait(EC.elementToBeClickable(careerPage.customerSiteApplyButton.getText()).to.eventually.equal('Apply')), 5000);
    browser.sleep(5000);
    await expect(browser.getTitle()).to.eventually.equal('Apply Online to The Good Shop Jobs');
    //await expect(browser.getCurrentUrl()).to.eventually.equal('http://localhost:4200/demo/');


});

Then(/^I should be presented with a site header$/, async () => {
    await careerPage.customerSiteHeader.isPresent();
    //await careerPage.customerSiteHomeButton.isDisplayed();
    await careerPage.customerSiteIntroLogo.isDisplayed();
    await careerPage.customerSiteIntroCopy.isDisplayed();
    await expect(careerPage.customerSiteHomeButton.isPresent()).to.eventually.equal(true);
    //await expect(careerPage.customerSiteHomeButton.getText()).to.eventually.equal('Home');
});

Then(/^Company sections$/, async () => {
    await careerPage.customerSiteSection.isPresent();
    await careerPage.customerSiteTestimonialSection.isDisplayed();
    //await careerPage.customerSiteIntroCopy.isPresent();
});

Then(/^Job Search section$/, async () => {
    //await careerPage.customerSiteSearchGEOBut.isPresent();
    await careerPage.customerSiteSearchLocation.isPresent();
    await careerPage.customerSiteSearchViewBut.isDisplayed();
    await careerPage.customerSiteSearchRadius.isDisplayed();
    //await careerPage.customerSiteSearchButton.isPresent();
});

Then(/^Job Listing$/, async () => {
    await careerPage.customerSiteSearchJobsBar.isPresent();
    await careerPage.customerSiteSearchResultsHeader.isPresent();
    await careerPage.customerSiteJobs.isPresent();
    await careerPage.customerSiteJobTitle.isPresent();
    await careerPage.customerSiteJobDistance.isPresent();
    await careerPage.customerSiteJobLocation.isPresent();
    await careerPage.customerSiteJobCategory.isPresent();
    await careerPage.customerSiteShareButton.isPresent();
    //await careerPage.customerSiteApplyButton.isPresent();
    await careerPage.customerSitePaginationSection.isPresent();
    //await careerPage.customerSitePaginationButton.isDisplayed();

    /*var EC = protractor.ExpectedConditions;
    await expect(browser.wait(EC.elementToBeClickable(careerPage.customerSiteApplyButton), 7000));
    await expect(careerPage.customerSiteApplyButton).to.eventually.equal(true);*/

    /*await careerPage.customerSiteApplyButton.count.then(function (numApplyBtn) {
     //browser.manage().timeouts().implicitlyWait(3000);
     browser.wait(EC.elementToBeClickable(careerPage.customerSiteApplyButton), 5000)
     expect(numApplyBtn).toEqual(10);
     });*/
    //browser.manage().timeouts().implicitlyWait(3000)

});

Then(/^site footer$/, async () => {
    await careerPage.customerSiteFooter.isPresent();
    await careerPage.customerSiteSocialMedia.isPresent();
    await careerPage.customerSiteFooterContact.isPresent();
});


Then(/^I click on a Job listing$/, async () => {
    // browser.wait(function() {
    //     return careerPage.customerSiteApplyButton.isDisplayed();
    // }, 10000);
    //await careerPage.customerSiteApplyBtnClick;
    //await careerPage.customerSiteApplyButton.click();
});


 Then(/^I am presented with a Job Details Page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Pizza Hut Part-Time Delivery Driver Job in Chesterfield, VA | The Good Shop");
    //await jobDetailsPage.something.isPresent();
     await jobDetailsPage.customerSiteHeader.isPresent();
     await jobDetailsPage.customerSiteBackButton.isPresent();
     await jobDetailsPage.customerSiteJobs.isPresent();
     await jobDetailsPage.customerSiteJobTitle.isPresent();
     await jobDetailsPage.customerSiteJobPosting.isPresent();
     await jobDetailsPage.customerSiteShareButton.isPresent();
     //await jobDetailsPage.customerSiteApplyButton.isPresent();
     await jobDetailsPage.customerSiteFooter.isPresent();
     await jobDetailsPage.customerSiteSocialMedia.isPresent();
     await jobDetailsPage.customerSiteSocialMediaIcons.isPresent();
     await jobDetailsPage.customerSiteFacebookIcon.isPresent();
     await jobDetailsPage.customerSiteYouTubeIcon.isPresent();
     await jobDetailsPage.customerSiteTwitterIcon.isPresent();
     await jobDetailsPage.customerSiteInstagramIcon.isPresent();
     await jobDetailsPage.customerSiteLinkedInIcon.isPresent();
     await jobDetailsPage.customerSiteFooterCopy.isPresent();
 });

/* When(/^I enters zip code "(.*?)" in the search field$/, async (text) => {
 //await search.searchTextBox.sendKeys(text);
 });

 Then(/^I click on search button$/, async () => {

 });

 Then(/^Jobs are displayed for that area$/, async () => {
 //await browser.actions().sendKeys(protractor.Key.ENTER).perform();
 });*/
