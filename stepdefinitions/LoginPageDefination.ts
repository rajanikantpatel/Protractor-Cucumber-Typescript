import { browser, ExpectedConditions } from "protractor";
import { config } from "../config/config";
import { loginPageObject } from "../pages/loginPage";
import { async } from "q";
import { isContext } from "vm";
import { Driver } from "selenium-webdriver/ie";
import { threadId } from "worker_threads";
import { dashboardPageObject } from "../pages/dashboardPage";
import { setDefaultTimeout } from "cucumber";
const { Given,When,Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const login: loginPageObject = new loginPageObject();
const dashboard: dashboardPageObject = new dashboardPageObject();
this.setDefaultTimeout = 60000;

Given(/^I am on (.*?) login page$/,{timeout: 60 * 1000}, async(product) => {
    if(product === "LBS"){
        await browser.get(config.lbsSignInURL);
         expect(browser.getTitle()).to.eventually.equal("Pitney Bowes");
    }
});

When(/^I provide username:"(.*?)"$/,async(username)=>{
console.log("username:" +username);
await delay(3000);
await login.emailTextBox.sendKeys(username);
});



When(/^I provide password:"(.*?)"$/,async(password)=>{
    console.log("password:" +password);
    await login.passwordTextBox.sendKeys(password);
    });

When(/^I click SignIn button$/,async()=>{
    
    await login.signInButton.click();
    //await delay(3000);
    });
 
   
Then(/^Page title is:"(.*?)"$/,{timeout: 60 * 1000},async(title)=>{
    console.log(browser.getTitle());
       //expect (await dashboard.pageHeader.getText() === title);
    await delay(9000);
    await expect(browser.getTitle()).to.eventually.equal(title);
    });
      
 Then(/^Header title is:"(.*?)"$/,{timeout: 60 * 1000},async(title)=>{
     console.log(dashboard.pageHeader.getText());
    //expect (await dashboard.pageHeader.getText() === title);
    await delay(4500);
    await expect(dashboard.pageHeader.getText()).to.eventually.equal(title);
    });

Then(/^Message on SiginIn Page is:"(.*?)"$/,{timeout: 20 * 1000},async(message)=>{
    await delay(4500)
    await expect(login.errorMessage.getText()).to.eventually.equal(message);
    });    

Then(/^I click on sign out page$/,{timeout: 60 * 1000},async()=>{
        await dashboard.userName.click();
        await browser.wait(ExpectedConditions.visibilityOf(dashboard.signOutLink));
        await dashboard.signOutLink.click();
        expect(browser.getTitle()).to.eventually.equal("Pitney Bowes");
        });    
    
        async function delay(ms: number) {
            return new Promise( resolve => setTimeout(resolve, ms) );
        }    
    