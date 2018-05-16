Feature: To validate Career Pages Search

  @search
  Scenario: Search Career Pages
    Given I am on DEMO career pages site
    When I enters zip code 23222 in the search field
    Then I click on search button
    Then Jobs are displayed for that area

  @search
  Scenario: Search Sort Career Pages
    Given I am on DEMO career pages site
    When I sort by Job Title
    Then hit apply
    Then Job listings sort by title alphabetically

  @search
  Scenario: Search Sort Career Pages
    Given I am on DEMO career pages site
    When I sort by Job Title
    Then hit apply
    Then Job listings sort by title alphabetically

  @search
  Scenario: Sort Job Type Career Pages
    Given I am on DEMO career pages site
    When I sort Job Title by Full-time
    Then hit apply
    Then verify badge displays correctly
    Then Job listings display Full-time jobs only
    When I sort Job Title by Part-time
    Then hit apply
    Then verify badge displays correctly
    Then Job listings display Part-time jobs only
    When I sort Job Title by Seasonal
    Then hit apply
    Then verify badge displays correctly
    Then Job listings display Seasonal only
    When I sort Job Title by Part-time and Teen
    Then hit apply
    Then verify badge displays correctly
    Then Job listings display Part-time and Teen jobs only