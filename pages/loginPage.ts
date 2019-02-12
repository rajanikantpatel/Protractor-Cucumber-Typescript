import { $, ElementFinder, element, by } from "protractor";

export class loginPageObject{
	public emailTextBox: ElementFinder;
	public passwordTextBox: ElementFinder;
	public signInButton: ElementFinder;
	public errorMessage: ElementFinder;
	
	constructor(){		//this.emailTextBox = $("input[type='email']");
		//this.emailTextBox = element(by.css("body > app-root > div > app-login > div > div > form > div > input"));
		this.emailTextBox = $("input[type='email']");
		this.passwordTextBox = $("input[type='password']");
		this.signInButton = $("button[type='submit']");
		this.errorMessage =  $("span");
	}
	
}