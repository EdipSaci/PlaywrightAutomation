import { test, expect } from "@playwright/test";
import path from "path";

test.describe("iframe handling", async() => {
 
    test("upload ", async ({ page }) => {

        await page.goto("https://practice.cydeo.com/upload");
        expect(page.url()).toBe("https://practice.cydeo.com/upload");

        //filePath
        const filePath = path.join(__dirname,"upload","testFile1.jpg");
        page.setInputFiles("#file-upload",filePath)
        await page.click("#file-submit")
        await page.waitForTimeout(2009)
        await expect(page.locator("div[class='example'] h3")).toBeVisible()
    });

    test("download ", async ({ page }) => {

        await page.goto("https://practice.cydeo.com/download");
        //setting listeners for download event
        const downloadPromise = page.waitForEvent("download")  //promise pending state

        await page.goto("https://practice.cydeo.com/download");
       
        await page.click("a[href='download/Sesson3.txt']")

        const download = await downloadPromise; //promise either full filled or rejected

        expect(download.suggestedFilename()).toBe("Sesson3.txt")
        
    });

    test("save the file that's downloaded ", async ({ page }) => {

        await page.goto("https://practice.cydeo.com/download");
         //setting listeners for download event
         const downloadPromise = page.waitForEvent("download")  //promise pending state

         await page.goto("https://practice.cydeo.com/download");
        
         await page.click("a[href='download/Sesson3.txt']")
 
         const download = await downloadPromise; //promise either full filled or rejected

         expect(download.suggestedFilename()).toBe("Sesson3.txt")

         //save the downloaded file
         const downloadPath = path.join(__dirname, "download", download.suggestedFilename());
         await download.saveAs(downloadPath);
    });
  
  });
  