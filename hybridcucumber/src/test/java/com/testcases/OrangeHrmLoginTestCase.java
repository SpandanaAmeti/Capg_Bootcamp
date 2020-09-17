package com.testcases;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.baseclass.Library;
import com.pages.OrangeHrmLoginPage;
import com.selenium_reusablefunctions.Selenium_Utility;
public class OrangeHrmLoginTestCase extends Library{

	OrangeHrmLoginPage lpage;
	Selenium_Utility seleniumUtil;
	
	@BeforeTest
	public void launchApp()
	{
		//launchApplication("chrome", "https://opensource-demo.orangehrmlive.com/");
		browserSetUp();
		logger.info("Browser Launched");
	}
	
	@Test
	public void login() {
		lpage=new OrangeHrmLoginPage(driver);
		lpage.LoginUser(properties.getProperty("username"),properties.getProperty("password"));
		logger.info("Browser Login Sucessful");
	}
	
	
	@AfterTest
	public void close() {
		
		seleniumUtil = new Selenium_Utility(driver);   
		seleniumUtil.getTitle();
		seleniumUtil.to_take_screenshot("loginPage");
		tearDown();
		logger.info("Browser Closing");
	}
}
