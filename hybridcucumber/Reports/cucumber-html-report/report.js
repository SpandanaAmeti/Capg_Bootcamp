$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/TestCase.feature");
formatter.feature({
  "name": "To Test the OrangeHrm Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.step({
  "name": "To Enter \"\u003cUsername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Select \"\u003cUserRole\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "UserRole"
      ]
    },
    {
      "cells": [
        "Manikanta",
        "Admin"
      ]
    },
    {
      "cells": [
        "Nagireddy",
        "All"
      ]
    }
  ]
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Open_Admin_functionlity_of_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter \"Manikanta\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"Admin\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.select_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "To Test the Login Function of OrangeHrm",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the browser and Navigate to the Url",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_launch_the_browser_and_Navigate_to_the_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter Username and Password",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Enter_Username_and_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Click_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmLoginSteps.to_Take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Test the Admin Functionality of OrangeHrm",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "To Open Admin functionlity of OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Open_Admin_functionlity_of_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter \"Nagireddy\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Enter(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select \"All\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.select(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Enter EmployeeName",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.to_Enter_EmployeeName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.select_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.click_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Take the Screenshot and the Title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.take_the_Screenshot_and_the_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "com.step_defination.OrangeHrmAdminPageSteps.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});