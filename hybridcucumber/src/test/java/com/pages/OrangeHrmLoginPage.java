package com.pages;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseclass.Library;

public class OrangeHrmLoginPage extends Library {

	
	public OrangeHrmLoginPage(WebDriver driver)
	{
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id = "txtUsername")
	WebElement usernameText;
	
	@FindBy(id = "txtPassword")
	WebElement passwordText;
	
	@FindBy(id = "btnLogin")
	WebElement loginButton;
	
	@FindBy(xpath = "//*[@id=\\'menu_admin_viewAdminModule\\']")
	WebElement menu_adminButton;
	
	public void LoginUser(String username, String password)
	{
		usernameText.sendKeys(username);
		passwordText.sendKeys(password);
	}
	
	public void Submit()
	{
		loginButton.click();
	}
	
	
	
}
