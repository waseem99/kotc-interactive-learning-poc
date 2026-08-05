import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const outputDir = "docs/proposal-evidence";

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

async function prepareContext(browser, viewport) {
  const context = await browser.newContext({
    viewport,
    colorScheme: "light",
    reducedMotion: "reduce",
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.evaluate((state) => {
    window.localStorage.setItem("kotc-poc-state-v1", JSON.stringify(state));
  }, demoState);
  return { context, page };
}

async function capture(page, route, filename, options = {}) {
  await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  await page.locator("html").waitFor({ state: "attached" });
  await page.waitForTimeout(300);
  await page.screenshot({
    path: `${outputDir}/${filename}`,
    fullPage: options.fullPage ?? false,
    animations: "disabled",
  });
}

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

try {
  const desktop = await prepareContext(browser, { width: 1440, height: 1000 });
  await capture(desktop.page, "/", "01-home-concept.png");
  await capture(desktop.page, "/dashboard", "02-learner-dashboard-desktop.png");
  await capture(desktop.page, "/house", "03-interactive-house.png");
  await capture(desktop.page, "/lesson/lower-impact-materials", "04-lesson-transcript.png");
  await capture(desktop.page, "/activity/material-match", "05-accessible-activity.png");
  await capture(desktop.page, "/admin", "06-administrator-dashboard.png");
  await capture(desktop.page, "/admin/content-editor", "07-cms-content-editor.png");
  await desktop.context.close();

  const mobile = await prepareContext(browser, { width: 390, height: 844 });
  await capture(mobile.page, "/dashboard", "08-learner-dashboard-mobile.png");
  await capture(mobile.page, "/house", "09-interactive-house-mobile.png");
  await mobile.context.close();
} finally {
  await browser.close();
}

console.log(`Captured proposal evidence in ${outputDir}`);
