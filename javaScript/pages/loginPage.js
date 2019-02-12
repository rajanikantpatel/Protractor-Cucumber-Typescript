"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class loginPageObject {
    constructor() {
        //this.emailTextBox = element(by.css("body > app-root > div > app-login > div > div > form > div > input"));
        this.emailTextBox = protractor_1.$("input[type='email']");
        this.passwordTextBox = protractor_1.$("input[type='password']");
        this.signInButton = protractor_1.$("button[type='submit']");
        this.errorMessage = protractor_1.$("span");
    }
}
exports.loginPageObject = loginPageObject;
