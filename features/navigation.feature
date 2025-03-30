Feature: Jupiter Toys Navigation and Shopping
  As a user
  I want to navigate through all main pages and add items to my cart
  So that I can access different functionalities and shop

  Background:
    Given I am on the Jupiter Toys website

  Scenario: Navigate to Home page
    When I click on the Home tab
    Then I should see the Home page content

  Scenario: Navigate to Shop page
    When I click on the Shop tab
    Then I should see the Shop page content

  