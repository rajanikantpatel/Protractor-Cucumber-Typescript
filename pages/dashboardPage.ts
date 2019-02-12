import { $, ElementFinder, element, by, By } from "protractor";

export class dashboardPageObject{
	public pageHeader: ElementFinder;
	public userName: ElementFinder;
	public signOutLink: ElementFinder;
	/*
	public passwordTextBox: ElementFinder;
	public signInButton: ElementFinder;
	*/

	constructor(){		//this.emailTextBox = $("input[type='email']");
		//this.emailTextBox = element(by.css("body > app-root > div > app-login > div > div > form > div > input"));
		this.pageHeader = $("#DevHubHeader");
		this.userName = $("#userName");
		//this.signOutLink = $(".dropdown-menu pb-animate-menu li a[href='https://dashboard-qa.devportal.pitneycloud.com/signout/dashboard']");
		this.signOutLink = element(By.linkText("Sign Out"));
		//this.signOutLink = $("a [href='https://dashboard-qa.devportal.pitneycloud.com/signout/dashboard']");
	}
	
}