import { test } from '@playwright/test';

test('', async ({ page }) => {

    await page.goto("https://www.youtube.com/")

    const searchBox = await page.locator("//input[@id='search']");

    await searchBox.click();

    await searchBox.fill("AI engnieer");

    await searchBox.press('Enter')

    await page.waitForTimeout(3000);
    
});