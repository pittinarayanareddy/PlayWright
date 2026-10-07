
require('dotenv').config();
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*.spec.ts', '**/*.spec.js'],

 // timeout:90000,
  expect:{
   // timeout:90000,
  },
  /* Run tests in files in parallel */

 // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
 // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
 // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'on',
    video : 'on',
    headless: false,
     permissions: [
      'geolocation',
      'notifications'
    ]
  },

  /* Configure projects for major browsers */
  projects: [
       {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport:{width:1536,height:864},
        //viewport: null,
        //colorScheme: 'dark',
        launchOptions: {
          slowMo: 3000,
           //args:["--start-fullscreen"]
           //args:["--start-maximized"]
        }
      },
    },

    /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
 */
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
//file upload
/*//import { test, expect } from require('@playwright/test');
import { test, expect } from '@playwright/test';
//const MultipleFile = ["tests/TestData/Images/Abhi.jpg","tests/TestData/WebOrder_Login.json"]
test('Flight Upload', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload')
        await page.waitForLoadState()
        //Loading Image file
        
        const filepath = 'tests/TestData/OrangeHRM_Login.json'
        //console.log(filepath)
        await page.locator('#file-upload').setInputFiles(filepath)
        await page.locator('#file-submit').click()
        //await page.waitForTimeout(5000)
        //await page.locator('#file-submit').click({timeout:5000})
        await page.waitForSelector("//h3[normalize-space()='File Uploaded!']")
        //await page.waitForTimeout(5000) // Wait for 5 seconds
        await expect(page.locator('#uploaded-files')).toHaveText('OrangeHRM_Login.json')
        await page.waitForTimeout(5000) // Wait for 5 seconds
    })
 */

    /*// Include playwright module
import { test, expect } from '@playwright/test';

// Write a test
test('Date Picker using iframe in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/datepicker/')
    await page.frameLocator('.demo-frame').locator('.hasDatepicker').fill('12/20/2026');
    await page.waitForTimeout(5000);

})

    
// // Write a test FOR Datepicker

test.only('Date Picker in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/datepicker/')
    const frameElement = page.frameLocator('.demo-frame');
    frameElement.locator('.hasDatepicker').click();

    // custom date value
    const defaultDate = frameElement.locator('.ui-datepicker-today > a')
    //await defaultDate.click();
    const currentDateValue = await defaultDate.getAttribute('data-date'); // 22 as a value
    let customDate = (parseInt(currentDateValue)); // 25 as value
    const element = "[data-date="+"'"+customDate.toString()+"'"+"]";
    console.log(element); // data-date='25'
    await frameElement.locator(element).click();
    await page.waitForTimeout(5000);

})

    */