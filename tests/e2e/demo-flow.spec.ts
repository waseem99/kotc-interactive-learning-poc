import { expect, test, type Page } from "@playwright/test";

async function waitForDemoReady(page: Page) {
  await expect(page.locator("html")).toHaveAttribute("data-demo-ready", "true");
}

test("registration concept continues into pathway selection without submitting data", async ({ page }) => {
  await page.goto("/sign-in");
  await waitForDemoReady(page);

  await page.getByRole("button", { name: "Create account" }).click();
  await page.getByLabel("First name").fill("Demo");
  await page.getByLabel("Last name").fill("Learner");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: /create account and choose pathway/i }).click();

  await expect(page).toHaveURL(/\/role-selection/);
  await expect(page.getByRole("heading", { name: /which learning pathway/i })).toBeVisible();
});

test("learner can move from pathway selection to the exterior interactive house", async ({ page }) => {
  await page.goto("/role-selection");
  await waitForDemoReady(page);
  await page.getByTestId("role-learner").click();
  await page.getByRole("button", { name: /continue to dashboard/i }).click();

  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole("heading", { name: /welcome back\. continue your course/i })).toBeVisible();
  await page.getByTestId("continue-learning").click();

  await expect(page).toHaveURL(/\/house/);
  await expect(page.getByRole("heading", { name: /explore the building from the outside/i })).toBeVisible();
  await page.getByRole("button", { name: /topic list/i }).click();
  await page.getByTestId("topic-list-materials").click();
  await expect(page.getByTestId("topic-panel").getByRole("heading", { name: "Material selection" })).toBeVisible();
});

test("display preferences persist after refresh", async ({ page }) => {
  await page.goto("/");
  await waitForDemoReady(page);

  const root = page.locator("html");
  const initialTheme = await root.getAttribute("data-theme");
  const expectedTheme = initialTheme === "system" ? "light" : initialTheme === "light" ? "dark" : "system";

  await page.locator("details.display-settings > summary").click();
  await page.getByRole("button", { name: /theme:/i }).click();
  await page.getByRole("button", { name: /text size: standard/i }).click();
  await expect(root).toHaveAttribute("data-theme", expectedTheme);
  await expect(root).toHaveAttribute("data-text-size", "large");

  await page.reload();
  await waitForDemoReady(page);
  await expect(root).toHaveAttribute("data-theme", expectedTheme);
  await expect(root).toHaveAttribute("data-text-size", "large");
});