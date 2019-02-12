"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const config_1 = require("../config/config");
const loginPage_1 = require("../pages/loginPage");
const dashboardPage_1 = require("../pages/dashboardPage");
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const login = new loginPage_1.loginPageObject();
const dashboard = new dashboardPage_1.dashboardPageObject();
this.setDefaultTimeout = 60000;
Given(/^I am on (.*?) login page$/, { timeout: 60 * 1000 }, (product) => __awaiter(this, void 0, void 0, function* () {
    if (product === "LBS") {
        yield protractor_1.browser.get(config_1.config.lbsSignInURL);
        expect(protractor_1.browser.getTitle()).to.eventually.equal("Pitney Bowes");
    }
}));
When(/^I provide username:"(.*?)"$/, (username) => __awaiter(this, void 0, void 0, function* () {
    console.log("username:" + username);
    yield delay(3000);
    yield login.emailTextBox.sendKeys(username);
}));
When(/^I provide password:"(.*?)"$/, (password) => __awaiter(this, void 0, void 0, function* () {
    console.log("password:" + password);
    yield login.passwordTextBox.sendKeys(password);
}));
When(/^I click SignIn button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield login.signInButton.click();
    //await delay(3000);
}));
Then(/^Page title is:"(.*?)"$/, { timeout: 60 * 1000 }, (title) => __awaiter(this, void 0, void 0, function* () {
    console.log(protractor_1.browser.getTitle());
    //expect (await dashboard.pageHeader.getText() === title);
    yield delay(9000);
    yield expect(protractor_1.browser.getTitle()).to.eventually.equal(title);
}));
Then(/^Header title is:"(.*?)"$/, { timeout: 60 * 1000 }, (title) => __awaiter(this, void 0, void 0, function* () {
    console.log(dashboard.pageHeader.getText());
    //expect (await dashboard.pageHeader.getText() === title);
    yield delay(4500);
    yield expect(dashboard.pageHeader.getText()).to.eventually.equal(title);
}));
Then(/^Message on SiginIn Page is:"(.*?)"$/, { timeout: 20 * 1000 }, (message) => __awaiter(this, void 0, void 0, function* () {
    yield delay(4500);
    yield expect(login.errorMessage.getText()).to.eventually.equal(message);
}));
Then(/^I click on sign out page$/, { timeout: 60 * 1000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield dashboard.userName.click();
    yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(dashboard.signOutLink));
    yield dashboard.signOutLink.click();
    expect(protractor_1.browser.getTitle()).to.eventually.equal("Pitney Bowes");
}));
function delay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => setTimeout(resolve, ms));
    });
}
