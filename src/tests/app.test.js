describe('Login functionality', () => {
    test('User can log in', async () => {
      await driver.get('http://localhost:3000');
  
      await driver.findElement(By.id('password')).sendKeys('yourpassword');
      await driver.findElement(By.tagName('button')).click();
  
      const welcomeText = await driver.findElement(By.tagName('p')).getText();
      expect(welcomeText).toContain('Welcome!');
    });
  
  });
  