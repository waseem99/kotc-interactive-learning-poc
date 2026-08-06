import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/sign-in",
  "/role-selection",
  "/dashboard",
  "/house",
  "/lesson/lower-impact-materials",
  "/activity/material-match",
  "/completion",
  "/admin",
  "/admin/content-editor",
  "/accessibility",
  "/design-system",
];

for (const route of routes) {
  test(`${route} has no serious or critical automated accessibility findings`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((violation) => ["serious", "critical"].includes(violation.impact ?? ""));
    expect(serious).toEqual([]);
  });
}
