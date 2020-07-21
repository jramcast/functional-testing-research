const { expect } = require("chai");
const { Builder, By } = require("selenium-webdriver");


// More info to connect with selenium
// https://www.npmjs.com/package/selenium-webdriver#the-standalone-selenium-server

describe("When a user navigates to the home page", () => {

    let driver;

    beforeEach(async () =>  {
        driver = await new Builder().forBrowser("firefox").build();
        await driver.get("http://localhost:8080");
    });

    afterEach(async () => {
        await driver.quit();
    });


    it("the user sees 'Hello Selenium'", async() => {
        const greeting = await driver.findElement(By.className("app")).getText();
        expect(greeting).to.equal("Hello Selenium!!!");
    });

})
