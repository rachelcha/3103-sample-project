const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');

jest.setTimeout(30000); // Set the timeout for Jest

beforeAll(async () => {
  global.driver = new Builder().forBrowser('chrome').build();
  await driver.manage().window().maximize(); // Maximize the browser window
});

afterAll(async () => {
  await driver.quit(); // Quit the WebDriver after all tests
});
