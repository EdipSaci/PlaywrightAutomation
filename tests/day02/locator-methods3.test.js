import { test, expect } from '@playwright/test';

test('state methods of locator', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/")

    const autoComplete = await page.locator("a[href='/autocomplete']")

    const elementIsDisplayed = await autoComplete.isVisible();

    const elementIsDisabled = await autoComplete.isDisabled();

    const elementIsEnabled = await autoComplete.isEnabled();

    console.log(elementIsDisplayed); //true
    console.log(elementIsDisabled); //false
    console.log(elementIsEnabled);  //true


    //isChecked()
    const checkBoxLink = await page.locator("text='Checkboxes'")
    await checkBoxLink.click()

    const checkbox1 = await page.locator("#box1")
    const checkbox2 = await page.locator("#box2")

    console.log(await checkbox1.isChecked()); //false
    console.log(await checkbox2.isChecked()); //true
    
    


});
