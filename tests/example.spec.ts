import { test, expect } from '@playwright/test';

test('Open transfer funds page and log in to ZeroBank', async ({ page }) => {
  const username = process.env.zeroBankUserName ?? 'username';
  const password = process.env.zeroBankPassword ?? 'password';

  await page.goto('http://zero.webappsecurity.com/index.html');
  await page.locator('#signin_button').click();

  await page.locator('#user_login').fill(username);
  await page.locator('#user_password').fill(password);
  await page.locator('input[type="submit"]').click();

  await page.waitForLoadState('networkidle');
  await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');

  await expect(page).toHaveURL(/zero\.webappsecurity\.com\/bank\/transfer-funds\.html/);
});