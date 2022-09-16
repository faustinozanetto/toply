import { test } from '@playwright/test';

test('Should navigate to about page', async ({ page }) => {
  await page.goto('/');
});
