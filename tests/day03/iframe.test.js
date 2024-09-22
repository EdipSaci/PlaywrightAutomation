import { test, expect } from "@playwright/test";

test.describe("iframe handling", async() => {


    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/iframe");
    });


    test("Locating iframe id css xpath", async ({ page }) => {

        const myIframe = await page.frameLocator("#mce_0_ifr");

        const typePlace = myIframe.locator('body p')

        await typePlace.press("Control+A")
        await page.keyboard.press("Backspace");

        await typePlace.fill("Hello from iframe");
        await page.waitForTimeout(2000)

    });
  
  });
  