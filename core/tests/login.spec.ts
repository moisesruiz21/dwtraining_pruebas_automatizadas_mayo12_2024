import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

let loginPage:LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');        
  loginPage = new LoginPage(page)
});


test.describe('login page tests', () => {

    test('Login with valid credentials', async ({ page }) => {
        let credentials = {
          userName : "standard_user",
          password : "secret_sauce"
        };  
        loginPage.fillLogin(credentials); 
        
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        
      });

      test('Login with invalid credentials', async ({ page }) => {
        let credentials = {
          userName : "standard_user",
          password : "salsa_secreta"
        };  
        loginPage.fillLogin(credentials);             
                       
        await expect(page.getByText("Username and password do not match any user in this service")).toBeVisible()
      });       

      test('Login with locked out user', async ({ page }) => {
        let credentials = {
          userName : "locked_out_user",
          password : "secret_sauce"
        };  
        loginPage.fillLogin(credentials);                     
                
        await expect(page.getByText("Sorry, this user has been locked out.")).toBeVisible()
      });      

})