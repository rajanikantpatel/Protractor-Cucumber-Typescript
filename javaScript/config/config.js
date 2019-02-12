"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter_1 = require("../support/reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
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
        protractor_1.browser.ignoreSynchronization = true;
        //browser.waitForAngularEnabled = ;
        protractor_1.browser.manage().window().maximize();
        reporter_1.Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../javaScript/stepdefinitions/*.js", "../../javaScript/support/*.js"],
        strict: true,
        timeout: 60000,
    },
    onComplete: () => {
        reporter_1.Reporter.createHTMLReport();
    },
};
