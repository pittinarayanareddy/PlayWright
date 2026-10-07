/* import { test, expect } from '@playwright/test';

test('OrangeHRM - Delete User and Verify Deletion @sanity', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'Admin' }).getByText('Admin').click();
    await page.locator('form i').nth(1).click();
    await page.getByText('Enabled').click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
    await page.waitForTimeout(5000);
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
    //Add Random number to user name
    const ExpUserName = 'Abhi' + Math.random() * 1000;
    await page.getByRole('textbox').nth(2).fill(ExpUserName);
    await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('Admin@123');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('Admin@123');
    await page.getByRole('button', { name: 'Save' }).click();
    //await page.waitForTimeout(2000)
    await page.waitForSelector("//i[@class='oxd-icon bi-plus oxd-button-icon']");
    //Verify that user got created
    await expect(page.locator("//div[text()='" + ExpUserName + "']")).toContainText(ExpUserName)
    // Delete the user and Verify that user got deleted from application
    await page.locator("//div[text()='" + ExpUserName + "']/parent::div/following-sibling::div//i[@class='oxd-icon bi-trash']").click();
    await page.locator("//i[@class='oxd-icon bi-trash oxd-button-icon']").click()
    await page.waitForSelector("//i[@class='oxd-icon bi-plus oxd-button-icon']");
    //Identify the WebTable section using container option
    //const locator = page.locator("//div[@class='orangehrm-container']");
    await expect(page.locator("//div[@class='orangehrm-container']")).not.toContainText(ExpUserName);
    //Logout from the application
    await page.getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
}); */

/* import { test, expect } from '@playwright/test';

test('Flipcart Login Page Mouse Hover', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  //await page.click("//span[@role='button']");
  await page.locator("//span[@role='button']").click()
  await page.waitForLoadState('networkidle');
  await page.hover("//span[normalize-space()='Login']")
  //await page.getByText('Login', { exact: true }).hover();
  await page.locator("//li[normalize-space()='My Profile']").click()
  //await page.click("//li[normalize-space()='My Profile']");
  await expect(page.locator("//button[normalize-space()='Request OTP']")).toHaveText("Request OTP")
  await expect(page.locator("//button[normalize-space()='Request OTP']")).toBeVisible()
  await page.waitForTimeout(5000)
});

test.only('Demo WebShop-Computer Mouse Hover', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.locator("//ul[@class='top-menu']//a[normalize-space()='Computers']").hover();
  await page.locator("//ul[@class='sublist firstLevel active']//a[normalize-space()='Notebooks']").click()
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/notebooks")
  await page.waitForTimeout(5000)
});
 */
//drag and drop
/* import { test, expect } from '@playwright/test';

test('Drag and Drop Exp 1 @smoke', async ({ page }) => {
    //Visit the OrnageHRM Website
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    await page.dragAndDrop("//span[normalize-space()='Draggable 1']","//div[@id='mydropzone']")
    await page.waitForTimeout(5000)
    //await page.click('.context-menu-icon-edit > span')
    
});

test('Drag and Drop Exp 2 @sanity', async ({ page }) => {
    //Visit the OrnageHRM Website
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    //await page.pause();  
    await page.dragAndDrop("//p[text()='Drag me to my target']","#droppable")
    await page.waitForTimeout(5000)
    //await page.click('.context-menu-icon-edit > span')
    
});

test('Drag and Drop Exp 3 @sanity', async ({ page }) => {
    //Visit the OrnageHRM Website
    await page.goto("https://www.lambdatest.com/selenium-playground/drag-and-drop-demo");
    await page.dragAndDrop("div[id='draggable'] p","#droppable")
    await page.waitForTimeout(5000)
    //await page.click('.context-menu-icon-edit > span')
    
});
 */
//iframe
/* import { test, expect } from '@playwright/test';
test('Date Picker using iframe in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/datepicker/')
    await page.frameLocator('.demo-frame').locator('.hasDatepicker').fill('12/20/2026');
    //await page.locator('.hasDatepicker').fill('12/20/2026');
    await page.waitForTimeout(5000);

}) */

//right click example
//import { test, expect } from require('@playwright/test');
/* import { test, expect } from '@playwright/test';

test('Right Clieck', async ({ page }) => {
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
   // Right Click on Button
    await page.locator("//span[text()='right click me']").click({ button: 'right' });
    await page.waitForTimeout(5000)
    await page.locator('.context-menu-list.context-menu-root').click()
    //await page.dblclick('.context-menu-icon-edit > span')
    await page.waitForTimeout(5000)
});
 */
//Scrolling Example

//import { test, expect } from require('@playwright/test');
/* import { test, expect } from '@playwright/test';

test('Right Clieck', async ({ page }) => {
    await page.goto("http://swisnl.github.io/jQuery-contextMenu/demo.html");
   // Right Click on Button
    await page.locator("//span[text()='right click me']").click({ button: 'right' });
    await page.waitForTimeout(5000)
    await page.locator('.context-menu-list.context-menu-root').click()
    //await page.dblclick('.context-menu-icon-edit > span')
    await page.waitForTimeout(5000)
}); */
// @ts-check
/*
import { test, expect } from '@playwright/test';

 test('Scroll To Particular Element Example @sanity', async ({ page }) => {
  //test.setTimeout(800000)
  await page.goto('https://demowebshop.tricentis.com/');
  const element = page.locator(".account")
  await element.scrollIntoViewIfNeeded();
  await element.click()
  await page.waitForTimeout(5000)
}); */

/* test('Scroll To Particular Element Flipcart @sanity', async ({ page }) => {
  //test.setTimeout(800000)
  await page.goto('https://www.flipkart.com/');
  await page.locator("//span[@role='button']").click()
  const element = await page.getByRole('link', { name: 'Contact Us' })
  await element.scrollIntoViewIfNeeded();
  await element.click()
  //await page.pause();
  await page.getByText('superPay Later').click();
  await element.scrollIntoViewIfNeeded();
  //await page.getByRole('link', { name: 'About Us' }).click();
  await page.locator("//span[@role='button']").click()
 // const clickonbutton = await page.getByRole('link', { name: 'About Us' })
  await element.scrollIntoViewIfNeeded();
  await expect(page).toHaveURL('https://corporate.flipkart.net/corporate-home');

 // await page.waitForTimeout(5000)
}); */
//work with multiple pages:

/* import { expect, test } from "@playwright/test";

test("OrangeHRM Window ", async ({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(page.url());
    // Multiple Windows
    const [multiPage] = await Promise.all([
        //Wait for popup window: this is not javascript alert or window alert
        page.waitForEvent("popup"),
        page.locator("a[href='http://www.orangehrm.com']").click()
        //page.click("a[href='http://www.orangehrm.com']")
    ])
    //It often happens that before all the pages get loaded completely,
    // the browsers get closed. To fix this issue, use a function that 
    //says “waitForLoadState.” This function ensures that the browser 
    //waits until all the pages are loaded
    await multiPage.waitForLoadState();
 
    // const pages = multiPage.context().pages();

    // //Interacting with multiple pages in Playwright
    // let OrangeHRMPage
    // for (let index = 0; index < pages.length; index++) {
    //     const url = pages[index].url()
    //     if (url == "https://www.orangehrm.com/") {
    //         OrangeHRMPage = pages[index];
            
    //     }
    // }
    const text = await multiPage.locator("h1").textContent();
     console.log(text);
    //console.log(OrangeHRMPage.url());
    await multiPage.locator("//button[contains(text(),'Contact Sales')]").click();
    await page.waitForTimeout(5000);
    //console.log(text);
    await multiPage.close();
    await page.waitForTimeout(5000);
    await page.getByText('Forgot your password?', { exact: true }).click();
    await page.waitForTimeout(5000);
}); */
//soft asseration
//import { test, expect } from '@playwright/test';
import { test, expect } from '@playwright/test';

test('Create Order-Update Order- Verify Order@smoke', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  //Browser.object.action
  await page.getByLabel('Username:').fill('Tester');
  //await page.pause();
  await page.getByLabel('Password:').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  //Verify that user has logged in
  //await page.url().includes('/Default1.aspx')
  await expect(page).toHaveURL('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/default.aspx')
  await page.getByRole('link', { name: 'Order' }).nth(1).click();
    //Verify that user has clicked on Order Link
  await page.url().includes('/Process.aspx')
  await page.getByRole('combobox', { name: 'Product:*' }).selectOption('FamilyAlbum');
  //await page.getByLabel('Quantity:*').click();
  //await page.getByText('Quantity:*').click();
  await page.getByLabel('Quantity:*').fill('5');
  //await page.getByLabel('Customer name:*').click();
  const ExpUserName = 'Dixit' + Math.random() * 1000;

  await page.getByLabel('Customer name:*').fill(ExpUserName);
  await page.getByLabel('Street:*').fill('BTM')
  //await page.getByLabel('Street:*').isEditable().fill('BTM');
  await page.getByLabel('City:*').fill('Bangalore');
  await page.getByLabel('Zip:*').click();
  await page.getByLabel('Zip:*').fill('560076');
  await page.getByLabel('Visa').check();
  await page.getByLabel('Card Nr:*').click();
  await page.getByLabel('Card Nr:*').fill('1234567891');
  await page.getByLabel('Expire date (mm/yy):*').fill('12/23');
  await page.getByRole('link', { name: 'Process' }).click();
 
  const neworder = await page.locator("//strong[normalize-space()='New order has been successfully added.']")
  //When several verification steps need to be added on a page, or some are less
  // important, you don't want test execution to stop when a certain condition
  // is not matched, or an assertion fails. 
  // Removed . from the below text
  await expect.soft(neworder).toHaveText('New order has been successfully added')

  await page.getByRole('link', { name: 'View all orders' }).click();
  // Verify that user got created
  await expect(page.locator("//td[normalize-space()='"+ExpUserName+"']")).toHaveText(ExpUserName)

  // Update the Order details

  await page.locator("//td[normalize-space()='"+ExpUserName+"']//following-sibling::td/input").click();
  //await page.waitForTimeout(3000)
  await page.locator('#ctl00_MainContent_fmwOrder_TextBox3').clear()
  await page.locator('#ctl00_MainContent_fmwOrder_TextBox3').fill('Delhi');
  await page.locator("#ctl00_MainContent_fmwOrder_UpdateButton").click()

  //Verify that City value change to Delhi
  await expect(page.locator("//td[normalize-space()='"+ExpUserName+"']//following-sibling::td[text()='Delhi']")).toHaveText("Delhi")

  await page.getByRole('link', { name: 'Logout' }).click()
  await page.url().includes("/Login.aspx")
});