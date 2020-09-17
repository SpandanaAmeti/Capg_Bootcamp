package com.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.baseclass.Library;

public class OrangeHrmAdminPage extends Library{

Select select;
	
	public OrangeHrmAdminPage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath = "//*[@id=\'menu_admin_viewAdminModule\']/b")
	WebElement menu_AdminButton;
	
	@FindBy(id = "searchSystemUser_userName")
	WebElement adminUserNameText;
	
	@FindBy(id = "searchSystemUser_userType")
	WebElement adminUserRoleText;
	
	@FindBy(id = "searchSystemUser_employeeName_empName")
	WebElement adminEmployeeNameText;
	
	@FindBy(id = "searchSystemUser_status")
	WebElement adminStatusText;
	
	@FindBy(id = "searchBtn")
	WebElement searchButton;
	
	public void clickMenuAdmin() {
		menu_AdminButton.click();
	}
	
	public void insertUserName(String username) {
		adminUserNameText.sendKeys(username);
	}
	
	public void selectUserType(String userType) {
		select =new Select(adminUserRoleText);
		select.selectByVisibleText(userType);
	}
	
	public void insertEmployeeName(String employeeName) {
		adminEmployeeNameText.sendKeys(employeeName);
	}
	
	public void selectStatus(String status) {
		select =new Select(adminStatusText);
		select.selectByVisibleText(status);
	}
	
	public void search() {
		searchButton.click();
	}
}
