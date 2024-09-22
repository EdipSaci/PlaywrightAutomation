import test from "@playwright/test";

test('Search for playwright in google',async({page}) => {

    await page.goto('https://www.google.com');
    
    const searchBox = await page.locator('#APjFqb');

    await searchBox.type('playwright') // type()  is typing letters one by one
    //await searchBox.fill('playwright');

    await searchBox.press('Enter')

    


    

});