import { test, expect } from '@playwright/test';
//This is done by record new from the tools
test('test', async ({ page }) => {
  await page.goto('https://www.reddit.com/?rdt=42736');
  await page.getByRole('link', { name: 'Log In' }).click();
  await page.locator('input[name="username"]').fill('ronorec491@acpeak.com');
  await page.locator('input[name="password"]').fill('F');
  await page.locator('input[name="password"]').press('CapsLock');
  await page.locator('input[name="password"]').fill('Friends101219$@');
  await page.locator('input[name="password"]').press('Enter');
  await page.goto('https://www.reddit.com/?rdt=42736');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').press('CapsLock');
  await page.getByRole('textbox').fill('QA');
  await page.getByRole('menuitem', { name: 'r/QAGeeks 4.8K members' }).click();
  await page.getByRole('button', { name: 'Joined' }).click();
  await page.getByRole('button', { name: 'Join' }).click();
  await page.getByRole('link', { name: 'Create post' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).click();
  await page.getByRole('textbox', { name: 'Title *' }).fill('THIS IS A DUMMY POST');
  await page.getByRole('textbox', { name: 'Title *' }).press('CapsLock');
  await page.getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Post body text field' }).fill('hey this is my first post');
  await page.getByRole('button', { name: 'Save draft' }).click();
});