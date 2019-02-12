import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://signup-qa.devportal.pitneycloud.com/signin/software-apis",
    lbsSignInURL: "https://signup-qa.devportal.pitneycloud.com/signin/software-apis",
    allScriptsTimeout: 20000,
    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        //browser.waitForAngularEnabled = ;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../javaScript/stepdefinitions/*.js", "../../javaScript/support/*.js"],
        strict: true,
        timeout: 60000,
        //tags: "@Regression"
        
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
