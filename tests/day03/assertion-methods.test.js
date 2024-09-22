import { test, expect } from "@playwright/test";

test.describe("Assertion methods", () => {
    
  test("toBe example", async () => {
    let number = 5;
    expect(number).toBe(5);

  });


  test("toBeTruthy & toBeFalsy", async () => {

    let value1 = true;
    expect(value1).toBeTruthy();

    let value2 = false;
    expect(value2).toBeFalsy();
  });


  test("toContain & toEqual", async () => {

    let s = "Cydeo School"
    let s1 = "Cydeo School";
    expect(s).toContain("Cydeo");

    let num = 5;
    expect(num).toEqual(5); // == operator of Java
    expect(num).toBe(5); // .equal() method of Java

    expect(s).toEqual("Cydeo School");

    expect(s).toBe(s1) // This works because both point to the same string value.

    let array = [1, 2, 3, 4, 5];
    let array2 = [1, 2, 3, 4, 5];

    expect(array).toEqual(array2); 
    //expect(array).toBe(array2); // This fails because array and array2 are different references.

  });



});
