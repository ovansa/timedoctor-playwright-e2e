import { test, expect } from "@playwright/test";
import {
  verifyNavigationMenu,
  verifyCallToActionButtons,
  verifyHeroSection,
  verifyFeaturesSection,
  verifyEnterpriseSection,
  verifyFooterSection,
} from "./actions/home-page-actions";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Verify elements on the Time Doctor Home page are visible", async ({
  page,
}) => {
  await verifyNavigationMenu(page);

  await verifyCallToActionButtons(page);

  await verifyHeroSection(page);

  await verifyFeaturesSection(page);

  await verifyEnterpriseSection(page);

  await verifyFooterSection(page);
});

test("Verify elements on the Time Doctor Home page are visible - Using Snapshot", async ({
  page,
}) => {
  await expect(page).toHaveScreenshot("home-page.png", { fullPage: true });
});
