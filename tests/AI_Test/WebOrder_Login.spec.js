import { readFileSync } from 'fs';
import path from 'path';
import { test, expect } from '@playwright/test';

const users = JSON.parse(
  readFileSync(path.join(__dirname, 'TestData', 'WebOrder_Login.json'), 'utf8')
);

for (const user of users) {
  test(`ZeroBank login - ${user.test_case}`, async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/login.html');
    await page.locator('#user_login').fill(user.username);
    await page.locator('#user_password').fill(user.password);
    await page.locator('input[type="submit"]').click();

    await page.waitForLoadState('networkidle');

    if (user.expected_result.includes('account-summary')) {
      await expect(page).toHaveURL(new RegExp(user.expected_result));
    } else {
      await expect(page.locator('.alert-error')).toContainText(user.expected_result);
    }
  });
}