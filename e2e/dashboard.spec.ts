import { test, expect } from "@playwright/test"

test.describe("Dashboard", () => {
  test("dashboard page loads", async ({ page }) => {
    await page.goto("/dashboard", { waitUntil: "domcontentloaded", timeout: 45000 })
    expect(page.url()).toContain("/dashboard")
  })

  test("leaderboard page loads", async ({ page }) => {
    await page.goto("/leaderboard", { waitUntil: "domcontentloaded", timeout: 45000 })
    expect(page.url()).toContain("/leaderboard")
  })

  test("referrals page loads", async ({ page }) => {
    await page.goto("/referrals", { waitUntil: "domcontentloaded", timeout: 45000 })
    expect(page.url()).toContain("/referrals")
  })

  test("profile edit page loads", async ({ page }) => {
    await page.goto("/profile/edit", { waitUntil: "domcontentloaded", timeout: 45000 })
    expect(page.url()).toContain("/profile/edit")
  })

  test("dashboard T&C page loads with return link", async ({ page }) => {
    await page.goto("/dashboard/term-and-condition")
    await expect(page.getByText(/return to flight deck/i)).toBeVisible()
  })

  test("dashboard privacy policy page loads", async ({ page }) => {
    await page.goto("/dashboard/privacy-policy", { waitUntil: "domcontentloaded" })
    expect(page.url()).toContain("/dashboard/privacy-policy")
  })

  test("dashboard manifesto page loads", async ({ page }) => {
    await page.goto("/dashboard/manifesto", { waitUntil: "domcontentloaded" })
    expect(page.url()).toContain("/dashboard/manifesto")
  })
})
