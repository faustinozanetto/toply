import { expect, test } from '@playwright/test';

test('Should navigate to about page', async ({ page }) => {
  await page.goto('/about');

  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h2')).toContainText('About');
});
