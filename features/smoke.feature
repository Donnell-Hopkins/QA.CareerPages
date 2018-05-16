Feature: Smoke test to validate Career Pages

  @smoke @cp
  Scenario: Career Pages Smoke Test
    Given I am on career pages display site
    Then I should be presented with a site header
    Then Company sections
    Then Job Listing
    Then site footer
    #Then I click on a Job listing
    #Then I am presented with a Job Details Page
    #When I click on the back button
    #Then I am presented with a career pages display site Page