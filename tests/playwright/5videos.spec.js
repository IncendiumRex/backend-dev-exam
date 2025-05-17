import { test, expect } from '@playwright/test';

//Chromium doesnt support .mp4 but the .mp4s work on FireFox

test('Can go to videos page', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: ' Videos' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('#vjs_video_3_html5_api')).toHaveAttribute('src', '/assets/videos/test.mp4');
});

test('Can go to test2.webm', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: ' Videos' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'test2.webm' }).click();
  await expect(page.locator('#vjs_video_3_html5_api')).toHaveAttribute('src', '/assets/videos/test2.webm');
});

test('Can go to test3.mp4', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: ' Videos' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'test3.mp4' }).click();
  await expect(page.locator('#vjs_video_3_html5_api')).toHaveAttribute('src', '/assets/videos/test3.mp4');
});