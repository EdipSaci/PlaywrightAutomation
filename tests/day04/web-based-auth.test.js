import { test, expect } from "@playwright/test";

test.describe("Basic auth", async() => {


    test("By embedding credentials in the URL", async ({ page }) => {

        //https://username:password@address
        //https://admin:adminpractice.cydeo.com

        await page.goto("https://admin:admin@practice.cydeo.com/basic_auth");
        await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible()

        //Not recommended to use this method because it is not secure
    });

    test("By encoding the credentials", async ({ page }) => {

        const code = Buffer.from("admin:admin").toString("base64")
        await page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});

        await page.goto("https://practice.cydeo.com/basic_auth");
        console.log(code);
        await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible()

       /**
        const code = Buffer.from("username:passsword").toString("base64")
        await page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});

        */


        
    });
  
  });
  