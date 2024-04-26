import { expect } from "@playwright/test";

export async function verifyNavigationMenu(page) {
  await page.goto("https://www.timedoctor.com/");
  await expect(page.getByTestId("header-logo-desktop")).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Product" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Solutions" })).toBeVisible();
  await expect(page.getByRole("menuitem", { name: "Pricing" })).toBeVisible();
}

export async function verifyCallToActionButtons(page) {
  await expect(page.getByRole("button", { name: "Sign In" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Request a Demo" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Start Trial" })).toBeVisible();
}

export async function verifyHeroSection(page) {
  await expect(page.locator('[id="Hero\\ Section"]')).toBeVisible();
  await expect(page.getByRole("button", { name: "Try it Free" })).toBeVisible();
  await expect(page.getByRole("button", { name: "View Demo" })).toBeVisible();
}

export async function verifyFeaturesSection(page) {
  await expect(
    page.getByRole("heading", { name: "How Time Doctor Works" })
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Contact Sales" })
  ).toBeVisible();
}

export async function verifyEnterpriseSection(page) {
  await expect(page.locator("#Enterprise section")).toBeVisible();
  await expect(page.getByTestId("feedback-section")).toBeVisible();
  await expect(
    page.locator("section").filter({ hasText: "Try Time Doctor for free" })
  ).toBeVisible();
  await expect(page.getByRole("button", { name: "Try it out" })).toBeVisible();
}

export async function verifyFooterSection(page) {
  await expect(page.getByRole("contentinfo")).toBeVisible();
  await expect(page.getByRole("heading", { name: "General" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Features" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "By Industry" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "By Use Case" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "By Workforce Type" })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Integrations" })
  ).toBeVisible();

  // Footer Links
  await expect(
    page.getByRole("link", { name: "Privacy Policy" })
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Terms of Service" })
  ).toBeVisible();
  await expect(page.getByLabel("facebook link")).toBeVisible();
  await expect(page.getByLabel("twitter link")).toBeVisible();
  await expect(page.getByLabel("linkedin link")).toBeVisible();
  await expect(page.getByLabel("instagram link")).toBeVisible();
}
