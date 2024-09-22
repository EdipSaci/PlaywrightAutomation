import { test, expect } from "@playwright/test";

test.describe("web tables", async() => {

    let table, rows, columns;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/web-tables");
        table = page.locator("//table[@class='SampleTable']")
        rows = table.locator("tbody tr");
        columns = table.locator("th");
    });

    test("@smoke verify rows and columns", async ({ page }) => {

        console.log("rows: " + await rows.count());
        expect(await rows.count()).toEqual(9);

        console.log("columns: " + await columns.count());
        expect(await columns.count()).toEqual(13);
    });

    test("read all data from the web table ", async ({ page }) => {

        // i stars from 1 coz it is checkbox
        //columns.count() coz last columns is Edit button
       for (let i = 1; i < await rows.count(); i++) {
       
        for (let j = 0; j < await columns.count()-1; j++) {
            const cell = table.locator(`//tr[${i+1}]/td[${j+1}]`);
            console.log(await cell.innerText());
        }
       }
    });


    test("verify all checkboxes can be check ", async ({ page }) => {

        const checkboxes = table.locator("//input[@type='checkbox']");
        expect(await checkboxes.count()).toEqual(8)

        for(const checkbox of await checkboxes.all()) {
            expect(await checkbox.isChecked()).toBeFalsy();
            await page.waitForTimeout(2000)
            await checkbox.check();
            expect(await checkbox.isChecked()).toBeTruthy();
        }
    });
  
  
  });
  