# Comment
@tag
Feature: End to end Ecommerce validation


    Application Regression
    @Regression
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |   name   |   gender  |
    |   Bob    |   Female  | 
    Then Validate the form behavior
    And Select the Shop Page