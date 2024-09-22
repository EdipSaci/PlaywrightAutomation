import { test, expect } from "@playwright/test";

test.describe("", () => {

    test.beforeEach( async ({page}) => {
        await page.goto("https://practice.cydeo.com/")
    });

  test("Verify the page title is Practice", async ({ page }) => {
    const pageTitle = await page.title();
    expect(pageTitle).toEqual("Practice");
    //or
    await expect(page).toHaveTitle('Practice');
    
  });


  test("Verify the text 'Automation' is included in the header element", async ({ page }) => {

    const headerElement = await page.locator('h1');
    const headerText = await headerElement.innerText();
    expect(headerText).toContain('Automation');

    //or
    const headerText2 = await headerElement.textContent();;
    expect(headerText2).toContain('Automation');
    
  });
  
  test("Verify the element 'A/B Testing' is clickable", async ({ page }) => {
    const abTestingLink = await page.locator('text=A/B Testing');
    
    expect(await abTestingLink.isEnabled()).toBeTruthy();
    await expect(abTestingLink).toBeEnabled();
  });

  test("Verify the element 'Autocomplate' href is '/autocomplate' ", async ({ page }) => {

    const autocomplateLink = await page.locator("a[href='/autocomplete']");
    const href = await autocomplateLink.getAttribute('href');
    expect(href).toBe("/autocomplete");

    //or
    await expect(autocomplateLink).toHaveAttribute("href", "/autocomplete")
    
  });

});
