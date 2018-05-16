Feature: To validate Career Pages Job Listings

  @jobs
  Scenario: Career Pages Job Listing
    Given I am on career pages display site
    Then I should be presented with a Job Search section
    Then Job Listing
    Then Job Listing Pagination
    When I click on a Job listing
    Then I am presented with a Job Details Page