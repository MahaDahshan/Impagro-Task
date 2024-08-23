import { test, expect } from '@playwright/test';

test.only('Reddit', async ({ page }) => {
    // Step 1: Navigate to Reddit
    await page.goto('https://www.reddit.com/');

    // Step 2: Click on the "Log In" button
    await page.getByRole('link', { name: 'Log In' }).click();

    // Step 3: Enter username and password
    await page.locator('input[name="username"]').fill('ronorec491@acpeak.com');
    await page.locator('input[name="password"]').fill('Friends101219$@');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.reload()
    

    // Wait for the search input to be visible and interactable
    const searchInput = await page.locator("input[placeholder='Search Reddit']").first();
    await searchInput.waitFor({ state: 'visible', timeout: 10000 });

    // Step 4: Search for "QAGeeks" in the search bar
    await searchInput.click();
    await searchInput.fill('QAGeeks');

    // Step 5: Click on the search result
    await page.locator("a[href*='/r/QAGeeks/']").click();


  //The run stops right after entering the new page of QAGeeks, also the page opened is not the same as expected and contains a login button again, although I have logged in before anything..
    //Step 6: Click on Join button
    const isJoined = await page.locator('button-primary button-medium button join-btn leading-none px-sm py-xs ').isVisible();
  if (!isJoined) {
    await page.getByRole('button', { name: ' button-primary button-medium button join-btn leading-none px-sm py-xs ' }).click();
  }
  
  });
