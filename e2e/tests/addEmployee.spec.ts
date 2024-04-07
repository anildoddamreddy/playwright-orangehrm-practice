import { test, expect } from "@playwright/test";

test("Check Creation of Employee", async ({ page }) => {
  var a;
          await page.goto(`${process.env.URL}`);
  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByPlaceholder("Password").press("Enter");
  await page.getByRole("link", { name: "PIM" }).click();
  await page.getByRole("link", { name: "Add Employee" }).click();
  await page.getByPlaceholder("First Name").fill("Adam");
  await page.getByPlaceholder("Middle Name").fill("pight");
  await page.getByPlaceholder("Last Name").fill("Catalin");
  await page.locator("form").getByRole("textbox").nth(4).click();
  await page.locator("form").getByRole("textbox").nth(4).fill("18756");
  await page.getByRole("button", { name: "Save" }).click();
  await expect(page.getByText("Successfully Saved")).toBeVisible();
});
