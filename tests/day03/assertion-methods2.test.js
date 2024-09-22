import { test, expect } from "@playwright/test";

test.describe("Assertion Methods Part2", async () => {

    let elements;
    let count;

    test.beforeEach (async ({ page }) => {
        await page.goto("https://practice.cydeo.com/"); 
        elements = page.locator("//ul[@class='list-group']/li/a");
        count =  await elements.count();
    });


    test("Verify that there are 50 elements under the url tag", async ({page}) => {
        expect(count).toBe(50);
    });
    
    test("Verify all 50 elements under the url tag are visible", async ({page}) => {
        
        let visibleCount = await elements.filter({visible: true}).count();
        console.log(visibleCount);
        expect(visibleCount).toBe(50);

        //display the visible text of each element
        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            //check if the element is visible
            expect(await element.isVisible()).toBeTruthy();

            console.log(await element.innerText());
        }

    });


    test("Verify all 50 elements under the url tag are enabled", async ({page}) => {

        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            //check if the element is enabled
            expect(await element.isEnabled()).toBeTruthy();

            //print href of each element
            console.log(await element.getAttribute('href'));
        }

    });
    
});