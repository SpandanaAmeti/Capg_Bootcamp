Feature: To Test the OrangeHrm Application

Background: To Test the Login Function of OrangeHrm
    Given To launch the browser and Navigate to the Url
    When To Enter Username and Password
    Then To Click the Submit button
    Then To Take the Screenshot and the Title

Scenario Outline: To Test the Admin Functionality of OrangeHrm
    Given To Open Admin functionlity of OrangeHrm
    When To Enter "<Username>"
    Then Select "<UserRole>" 
    Then To Enter EmployeeName
    Then Select Status
    Then Click Search Button
    Then Take the Screenshot and the Title
    Then Close the browser
    
    Examples: 
    |Username| UserRole|
    |Manikanta| Admin |
    |Nagireddy| All |