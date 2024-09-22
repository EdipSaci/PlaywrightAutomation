import { test, expect } from '@playwright/test';

test('check & uncheck method test:can be used for radio buttons and checkboxes ', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/checkboxes")

    const checkbox1 = await page.locator("#box1")
    await page.waitForTimeout(2000);

    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    await page.waitForTimeout(2000);

    const checkbox2 = await page.locator("#box2")
    await checkbox2.uncheck();
    await page.waitForTimeout(2000);
    await expect( await checkbox2.isChecked()).toBeFalsy();

    await page.waitForTimeout(3000);
});

test('selectOptions method test: can be used for dropdowns ', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/dropdown")
    const dropdown = await page.locator("#dropdown")

    await page.waitForTimeout(2000);

    //select by value
    await dropdown.selectOption("1");
    await page.waitForTimeout(2000);

    //select by index
    await dropdown.selectOption({ index: 2 });
    await page.waitForTimeout(2000);

    //select by text
    await dropdown.selectOption({label:"Option 1"});
    await page.waitForTimeout(2000);

});