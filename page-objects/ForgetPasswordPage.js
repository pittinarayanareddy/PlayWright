//import { expect, Locator, Page } from '@playwright/test'
import { expect, Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';

export class forgetpassword  {
//exports.LoginPage = class LoginPage {
  // Define selectors
  // readonly page: Page
  usernameInput = Locator
  passwordInput = Locator
  submitButton = Locator
  errorMessage = Locator
  keepmesignedin = Locator
  Forgetpassword = Locator
  LogInToZeroBanktext = Locator
  QuestionMarkIcon = Locator
  // Init selectors using constructor
  constructor(page = Page) {
    // this.page = page
    super(page)
    this.usernameInput = page.getByRole('textbox', { name: 'Login' }) //page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.Forgetpassword = page.locator("a[href='/forgot-password.html']") 
    this.LogInToZeroBanktext = page.locator('h3:has-text("Log in to ZeroBank")')
    this.EnterMailid = page.locator('#user_email')
this.ClickOnSendPasswordButton = page.getByRole('button')
this.VerifytextMessage =  page.getByText('Forgotten Password', { exact: true })
this.VerifyTextoutput =  page.locator("//div[@class='offset3 span6']")

  }

 
  async enteremail() {
    await this.Forgetpassword.click()
  }
  async clickonsendpassword() {
    await this.EnterMailid.fill("email")
    await this.clickonsendpassword.click()
  }

  async forgetpasswordtext() {
   // await this.Forgetpassword.click()
    await this.Forgetpassword.click()
  }

}