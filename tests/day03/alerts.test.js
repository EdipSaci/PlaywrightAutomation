import { test, expect } from "@playwright/test";

test.describe(" ", async() => {


    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    });


    test("handling JS alerts", async ({ page }) => {
    
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain("I am a JS Alert")
            await page.waitForTimeout(2000)
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        })

        await page.click("button[onclick='jsAlert()']");
        await page.waitForTimeout(2000);

        const messageElement = await page.locator("#result")
        const text = await messageElement.textContent();

        console.log(text);

        expect(text).toBe("You successfully clicked an alert");

        await expect(page.locator("#result")).toBeVisible();

    });

    test("handling JS Confirm", async ({ page }) => {

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain("I am a JS Confirm")
            await page.waitForTimeout(2000)
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.dismiss();
        })

        await page.click("button[onclick='jsConfirm()']");
        await page.waitForTimeout(2000);

        const messageElement = await page.locator("#result")
        const text = await messageElement.textContent();
        expect(text).toBe("You clicked: Cancel");

    });

    test("handling JS Prompt", async ({ page }) => {

        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain("I am a JS prompt")
            await page.waitForTimeout(2000)
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept('Arthur Morgan');
        })

        await page.click("button[onclick='jsPrompt()']");
        await page.waitForTimeout(2000);

        const messageElement = await page.locator("#result")
        const text = await messageElement.textContent();
        expect(text).toBe("You entered: Arthur Morgan");
    })
  
  });
  