import { test, expect } from "@playwright/test";

test.describe("Mouse Actions ", async() => {


    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });


    test("Right click with mouse hover test", async ({ page }) => {
        await page.click("a[href='/inputs']", {button:"right"})
        await page.waitForTimeout(2000)
    });

    test("Double click with mouse hover test", async ({ page }) => {
        await page.dblclick("a[href='/abtest']")
        await page.waitForTimeout(2000)
        expect(page.url()).toBe("https://practice.cydeo.com/abtest")
    });


    test("mouse hover test", async ({ page }) => {
        await page.click("a[href='/hovers']")
        await page.waitForTimeout(2000)

        await page.hover("(//img[@alt='User Avatar'])[1]")
        await expect(page.locator("//h5[normalize-space()='name: user1']")).toBeVisible();

        await expect(await page.locator("//h5[normalize-space()='name: user1']").innerText()).toBe("name: user1")

        //multiple mouse hover
        const elements = await page.locator("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']")

        for(const eachElement of await elements.all()){
            await page.waitForTimeout(2000)
            await eachElement.hover()
        }

    });



    test("Drag and Drop", async ({ page }) => {

        //first way-- dragAndDrop()
        await page.click("a[href='/drag_and_drop']")
        await page.waitForTimeout(2000)
        await page.dragAndDrop("#column-a", "#column-b")
        await page.waitForTimeout(2000)

        //second way -- dragTo()
        const sourceElement = page.locator("#column-a")
        const targetElement = page.locator("#column-b")
        await sourceElement.dragTo(targetElement)
        await page.waitForTimeout(2000)

        //assertions
        const dragableElements = page.locator("//div[@class='column' and @draggable='true']")
        let texts = ['A', 'B']

        for(let i=0; i<await dragableElements.count(); i++){
            const text = await dragableElements.nth(i).innerText()
            expect(text).toBe(texts[i])
            console.log(text);
        }
        await page.waitForTimeout(2000)
    
    });


    test("mouse wheel scrolling test", async ({ page }) => {

        //first way wheel()
        await page.waitForTimeout(2000)
        await page.mouse.wheel(0,300)
        await page.waitForTimeout(2000)
        
        //scrollToElement()
        const inputLink = page.locator("a[href='/inputs']")
        await inputLink.scrollIntoViewIfNeeded()
        await page.waitForTimeout(2000)
    });




  });
  