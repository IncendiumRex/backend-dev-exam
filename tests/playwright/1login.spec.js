import { test, expect } from '@playwright/test';

test('Can login', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading')).toHaveText('Products');
});