import { mkdir } from "node:fs/promises";
import path from "node:path";
import { expect, test, type Page } from "@playwright/test";

const outputDir = path.join(process.cwd(), "artifacts", "proposal-screenshots");

const demoState = {
  role: "learner",
  theme: "light",
  textSize: "standard",
  reducedMotion: true,
  completedTopics: ["foundation"],
  currentTopic: "materials",
  lessonVisited: true,
  activityComplete: false,
};

async function preparePage(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
  await page.addInitScript((state) => {
    window.localStorage.setItem("kotc-poc-state-v2", JSON.stringify(state));
  }, demoState);
}

async function capture(page: Page, route: string, filename: string) {
  await page.goto(route);
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() => document.documentElement.dataset.demoReady === "true");
  await expect(page.locator("main")).toBeVisible();
  await page.screenshot({
    path: path.join(outputDir, filename),
    fullPage: true,
    animations: "disabled",
  });
}

test.describe("proposal screenshot evidence", () => {
  test.skip(
    process.env.CAPTURE_PROPOSAL_SCREENSHOTS !== "1",
    "Run through the dedicated proposal screenshot workflow.",
  );

  test.beforeAll(async () => {
    await mkdir(outputDir, { recursive: true });
  });

  test("captures editorial v2 desktop and mobile evidence", async ({ page }) => {
    await preparePage(page);

    await page.setViewportSize({ width: 1440, height: 1000 });
    await capture(page, "/", "01-home-editorial-v2.png");
    await capture(page, "/dashboard", "02-learner-dashboard-desktop.png");
    await capture(page, "/house", "03-interactive-house-desktop.png");

    await page.getByRole("button", { name: "Accessible list" }).click();
    await page.screenshot({
      path: path.join(outputDir, "04-interactive-house-list-view.png"),
      fullPage: true,
      animations: "disabled",
    });

    await capture(page, "/lesson/lower-impact-materials", "05-lesson-and-transcript.png");
    await capture(page, "/activity/material-match", "06-accessible-activity.png");
    await capture(page, "/admin", "07-administrator-dashboard.png");
    await capture(page, "/admin/content-editor", "08-cms-content-editor.png");
    await capture(page, "/completion", "09-completion-certificate.png");

    await page.setViewportSize({ width: 390, height: 844 });
    await capture(page, "/dashboard", "10-learner-dashboard-mobile.png");
    await capture(page, "/house", "11-interactive-house-mobile.png");
  });
});
