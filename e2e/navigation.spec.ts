import { test, expect } from "@playwright/test"

test.describe("Navigation", () => {
  test("navigate from home to login via CTA link", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" })
    await page.getByRole("link", { name: /mint your passport/i }).click()
    await page.waitForURL(/\/login/)
    expect(page.url()).toContain("/login")
  })

  test("protected routes are accessible in dev mode", async ({ page }) => {
    await page.goto("/dashboard", { waitUntil: "domcontentloaded" })
    expect(page.url()).toContain("/dashboard")
  })

  test("protected route /mint-pass loads", async ({ page }) => {
    await page.goto("/mint-pass", { waitUntil: "domcontentloaded" })
    expect(page.url()).toContain("/mint-pass")
  })

  test("mint pass detail page shows pass options", async ({ page }) => {
    await page.goto("/mint-pass", { waitUntil: "domcontentloaded" })
    await expect(page.getByRole("heading", { name: /choose your path/i })).toBeVisible()
  })
})
