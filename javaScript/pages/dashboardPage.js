"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class dashboardPageObject {
    /*
    public passwordTextBox: ElementFinder;
    public signInButton: ElementFinder;
    */
    constructor() {
        //this.emailTextBox = element(by.css("body > app-root > div > app-login > div > div > form > div > input"));
        this.pageHeader = protractor_1.$("#DevHubHeader");
        this.userName = protractor_1.$("#userName");
        //this.signOutLink = $(".dropdown-menu pb-animate-menu li a[href='https://dashboard-qa.devportal.pitneycloud.com/signout/dashboard']");
        this.signOutLink = protractor_1.element(protractor_1.By.linkText("Sign Out"));
        //this.signOutLink = $("a [href='https://dashboard-qa.devportal.pitneycloud.com/signout/dashboard']");
    }
}
exports.dashboardPageObject = dashboardPageObject;
