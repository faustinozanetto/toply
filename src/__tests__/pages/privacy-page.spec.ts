import { expect, test } from '@playwright/test';

test('Should navigate to privacy page', async ({ page }) => {
  await page.goto('/privacy');

  // The new page should contain an h1 with "Privacy Page"
  await expect(page.locator('h2')).toContainText('Privacy');
});
