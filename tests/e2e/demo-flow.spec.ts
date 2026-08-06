import { expect, test, type Page } from "@playwright/test";

async function waitForDemoReady(page: Page) {
  await expect(page.locator("html")).toHaveAttribute("data-demo-ready", "true");
}

test("account concept continues into role selection without submitting data", async ({ page }) => {
  await page.goto("/sign-in");
  await waitForDemoReady(page);
  await page.getByRole("button", { name: /continue to role selection/i }).click();
  await expect(page).toHaveURL(/\/role-selection/);
});

test("learner can move from role selection to the interactive house", async ({ page }) => {
  await page.goto("/role-selection");
  await waitForDemoReady(page);
  await page.getByTestId("role-learner").click();
  await page.getByRole("button", { name: /continue to dashboard/i }).click();
  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByRole("heading", { name: /your next step is ready/i })).toBeVisible();
  await page.getByTestId("continue-learning").click();
  await expect(page).toHaveURL(/\/house/);
  await expect(page.getByRole("heading", { name: /navigate a complete learning chapter/i })).toBeVisible();
  await page.getByTestId("house-topic-materials").click();
  await expect(
    page.locator(".topic-panel").getByRole("heading", { name: "Lower-impact materials" }),
  ).toBeVisible();
});

test("display preferences persist after refresh", async ({ page }) => {
  await page.goto("/");
  await waitForDemoReady(page);
  await page.getByRole("button", { name: /open display settings/i }).click();
  await page.getByRole("button", { name: /theme: system/i }).click();
  await page.getByRole("button", { name: /text size: standard/i }).click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator("html")).toHaveAttribute("data-text-size", "large");
  await page.reload();
  await waitForDemoReady(page);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.locator("html")).toHaveAttribute("data-text-size", "large");
});