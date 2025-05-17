import { test,expect } from '@playwright/test'
import path from 'path'; // Learns how to work with file and directory
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filFil = fileURLToPath(import.meta.url)
const dirDir= dirname(filFil);
  // Had to look up how uploading images works. Never learned :(

test('Can go to create page', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading')).toHaveText('Products');
  await page.getByRole('link', { name: 'Create', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByText('Product Create')).toBeVisible();
});

test('Can go to create page through sidebar', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading')).toHaveText('Products');
  await page.getByRole('link', { name: ' Create' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByText('Product Create')).toBeVisible();
});


test('Can search product', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Search Product...' }).click();
  await page.getByRole('textbox', { name: 'Search Product...' }).fill('EVER happen in a confused way');
  await page.getByRole('textbox', { name: 'Search Product...' }).press('Enter');
  await expect(page.getByRole('cell', { name: 'EVER happen in a confused way' }).first()).toBeVisible();
});

test('Can move pages', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('2').click();
  await expect(page.getByRole('cell', { name: 'et' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Some of the wood to listen' }).first()).toBeVisible();
});

test('Can filter page to Electronics', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox').selectOption('1');
  await page.locator('.text-right > .btn').click();
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Clothing' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Beauty & Personal Care' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sports & Outdoors' }).first()).not.toBeVisible();
  //await expect(page.getByTitle('Electonics')).toBeVisible();
});

test('Can filter page to Clothing', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox').selectOption('2');
  await page.locator('.text-right > .btn').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Clothing' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Beauty & Personal Care' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sports & Outdoors' }).first()).not.toBeVisible();
});

test('Can filter page to Home & Furnitures', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox').selectOption('3');
  await page.locator('.text-right > .btn').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Clothing' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Beauty & Personal Care' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sports & Outdoors' }).first()).not.toBeVisible();
});

test('Can filter page to Beauty & Personal Care', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox').selectOption('4');
  await page.locator('.text-right > .btn').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Clothing' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Beauty & Personal Care' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sports & Outdoors' }).first()).not.toBeVisible();
});

test('Can filter page to Sports & Outdoors', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('combobox').selectOption('5');
  await page.locator('.text-right > .btn').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Clothing' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Beauty & Personal Care' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Sports & Outdoors' }).first()).toBeVisible();
});

test('Can create products', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByRole('heading')).toHaveText('Products');
  await page.getByRole('link', { name: 'Create', exact: true }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('test1');
  await page.getByRole('combobox').selectOption('1');
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).click();
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).fill('I will prove myself strange');
  await page.waitForTimeout(2000);
  await page.getByText('Next').click();
  await page.waitForTimeout(2000);
  const filePath = path.resolve(dirDir, 'blk.png');
  await page.setInputFiles("input[type='file']",filePath);
  await page.getByText('Next').click();
  await page.getByRole('textbox', { name: 'Datepicker input' }).click();
  await page.getByText('17').click();
  await page.getByRole('button', { name: 'Open months overlay' }).click();
  await page.getByRole('gridcell', { name: 'May' }).locator('div').click();
  await page.getByRole('button', { name: 'Open years overlay' }).click();
  await page.getByRole('gridcell', { name: '2025' }).locator('div').click();
  await page.getByRole('button', { name: 'Select' }).click();
  await page.getByText('Submit').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: ' List' }).click();
  await expect(page.getByRole('cell', { name: 'test1' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Electonics' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'I will prove myself strange' }).first()).toBeVisible();
});

test('Can edit products', async ({ page }) => { //only run after running 'Can create products test'
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('row', { name: 'test1 Electonics <p>I will' }).getByRole('link').click();

  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('testEdit');
  await page.getByRole('combobox').selectOption('3');
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).click();
  await page.getByRole('textbox', { name: 'Editor editing area: main' }).fill('This fish is my brother');
  await page.waitForTimeout(2000);
  await page.getByText('Next').click();
  await page.waitForTimeout(2000);
  await page.getByText('Next').click();
  await page.getByText('Submit').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByRole('cell', { name: 'testEdit' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).toBeVisible();
  await expect(page.getByRole('cell', { name: 'This fish is my brother' }).first()).toBeVisible();
});

test('Can delete products', async ({ page }) => { //only run after running 'Can create products test'
  await page.goto('http://127.0.0.1:8000//');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('textbox', { name: 'Email' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill('kirstin82@example.net');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('row', { name: 'testEdit Home & Furnitures <p' }).locator('a').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await expect(page.getByRole('cell', { name: 'testEdit' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'Home & Furnitures' }).first()).not.toBeVisible();
  await expect(page.getByRole('cell', { name: 'This fish is my brother' }).first()).not.toBeVisible();
});
