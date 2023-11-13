const { Builder, By, Key, until } = require('selenium-webdriver');

async function runSeleniumTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to your React app
    await driver.get('http://localhost:3000');

    // Find the password input field and interact with it
    const passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('yourpassword', Key.RETURN);

    // Find the login button and click on it
    const loginButton = await driver.findElement(By.xpath('//button[contains(text(), "Login")]'));
    await loginButton.click();

    // Wait for the welcome message to be visible
    const welcomeMessage = await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Welcome!")]')), 10000);
    await driver.wait(until.elementIsVisible(welcomeMessage), 10000);

    // Print a message to the console
    console.log('Login successful! Welcome message displayed.');

    // Find the logout button and click it
    const logoutButton = await driver.findElement(By.xpath('//button[contains(text(), "Logout")]'));
    await logoutButton.click();

    // Wait for the home page message to be displayed after logout
    await driver.wait(until.elementLocated(By.xpath('//p[contains(text(), "Home Page")]')), 10000);

    // Print a message to the console
    console.log('Logout successful! Home Page message displayed.');
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Run the test
runSeleniumTest();
