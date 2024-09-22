import { test, expect } from '@playwright/test';

test('check & uncheck method test:can be used for radio buttons and checkboxes ', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/")

    const abTestingLink = await page.locator("text='A/B Testing'");

    await abTestingLink.click();
    await page.waitForTimeout(3000);

    //innertext() method
    const paragraph = await page.locator("div[class='example'] p");
    const innerText = await paragraph.innerText();;
    console.log(innerText);

});


test('inputValue mmethod test: only works with <input> , <textarea> or <select> ', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/inputs")
    const inputField = await page.locator("input[type='number']");
    await inputField.fill("1200");

    await page.waitForTimeout(2000)

    const inputValue = await inputField.inputValue();
    console.log(inputValue);

});


test('getAttribute(): get value of an attribute of the element', async ({ page }) => {

    await page.goto("https://practice.cydeo.com/inputs")
    const cydeo = await page.locator("a[target='_blank']")
    const elementLink = await cydeo.getAttribute("href")
    console.log(elementLink);


    

});
