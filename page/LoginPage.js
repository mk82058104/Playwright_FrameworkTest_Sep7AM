export  class LoginPage{
    constructor(page){
        this.page=page;
        this.loginLink= page.getByRole('link', { name: 'Log in' });
        this.emailInputbox=page.getByRole('textbox', { name: 'Email:' });
        this.passwordInputbox=page.getByLabel('Password:');
        this.loginBtn=page.locator('input.button-1.login-button')
    }

    async loginAPP(userName,userPassword){
        await this.loginLink.click();
        await this.emailInputbox.fill(userName);
        await this.passwordInputbox.fill(userPassword);
        await this.loginBtn.click();
    }


    
    
}


//Gihub co->