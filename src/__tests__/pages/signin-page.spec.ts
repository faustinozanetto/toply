import { expect, test } from '@playwright/test';

test('Should navigate to sign in page', async ({ page }) => {
  await page.goto('/signin');

  // The new page should contain an h1 with "Sign In Now"
  await expect(page.locator('h2')).toContainText('Sign In Now');
});
