import { test, expect } from '@playwright/test';
import dotenv from "dotenv";

dotenv.config("./.env");


test('Library Login', async ({ page }) => {

    await page.goto(process.env.LIBRARY_URL)

    const emailInputBox = await page.locator("label[for='inputEmail']")
    await emailInputBox.fill(process.env.LIBRARY_STUDENT_USERNAME)

    const passwordInputBox = await page.locator("label[for='inputPassword']")
    await passwordInputBox.fill(process.env.LIBRARY_STUDENT_PASSWORD)

    await page.waitForTimeout(3000)

    const signInButton = await page.locator("button[type='submit']")
    await signInButton.click();

    await page.waitForTimeout(3000)


});