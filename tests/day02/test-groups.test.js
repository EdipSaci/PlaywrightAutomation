import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
  console.log("this is beforeAll hook...");
});

test.afterAll(async () => {
  console.log("this is afterAll hook...");
});

test.beforeEach(async ({ page }) => {
  console.log("this is beforeEach hook...");
});

test.afterEach(async ({ page }) => {
  console.log("this is afterEach hook...");
});

test.describe("Group1", () => {

  test("test1", async ({ page }) => {
    console.log("this is test 1...");
  });

  test("test2", async ({ page }) => {
    console.log("this is test 2....");
  });

});
