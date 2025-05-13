import { Locator, Page } from "@playwright/test";
import { LoginCredentialModel } from "../models/login.models";

export class LoginPage {
    
    private readonly userName:Locator;
    private readonly password:Locator;
    private readonly loginButton:Locator;

    constructor (page:Page){
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async fillLogin(credentials:LoginCredentialModel){
        await this.userName.fill(credentials.userName);
        await this.password.fill(credentials.password);
        await this.loginButton.click();
    }

}