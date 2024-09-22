import { test } from '@playwright/test';

test('', async ({ page }) => {
  
    // go to google webisite
    await page.goto('https://www.google.com');

    //find search box and type Cydeo
    await page.locator('#APjFqb').fill('Cydeo');

    await page.waitForTimeout(3000);
    
    //press Enter to search
    await page.keyboard.press('Enter');
});