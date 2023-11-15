const { Builder, By, Key, until } = require('selenium-webdriver');

async function runSeleniumTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost:3000');

    const passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('yourpassword', Key.RETURN);

    const loginButton = await driver.findElement(By.xpath('//button[contains(text(), "Login")]'));
    await loginButton.click();

    const welcomeMessage = await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Welcome!")]')), 10000);
    await driver.wait(until.elementIsVisible(welcomeMessage), 10000);

    console.log('Login successful! Welcome message displayed.');

    const logoutButton = await driver.findElement(By.xpath('//button[contains(text(), "Logout")]'));
    await logoutButton.click();

    await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Home Page")]')), 10000);

    console.log('Logout successful! Home Page message displayed.');
  } finally {
    await driver.quit();
  }
}

runSeleniumTest();
