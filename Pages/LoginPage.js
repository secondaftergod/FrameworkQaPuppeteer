import BasePage from './basePage';
const expect = require('chai').expect


class LoginPage extends BasePage {

    constructor(page){
        super(page);
        this.username  = "#user-name";
        this.password     = "#password";
        this.alertMessage = ".error";
        this.submitButton = "#login-button";
        this.loginError="#login_button_container > div > form > div.error-message-container.error"

        this.userData = {
            username: "standard_user",
            password: "secret_sauce",
        };
    }

    get pageUrl() {
        return this.url;
    }

    async gotoPage() {
        await this.page.goto(this.pageUrl);
        // await this.page.waitForTimeout(5000)
        await this.page.waitForSelector(this.username);
    }
    async enterFakeUserData(user,pass) {
        await this.page.type(this.username, user);
        await this.page.type(this.password, pass);
    }
    async enterUserData() {
        await this.page.type(this.username, this.userData.username);
        await this.page.type(this.password, this.userData.password);
    }
    async clickLogin() {
        await this.page.focus(this.submitButton);
        await this.page.click(this.submitButton);
    }
    async checkErrorLogin(){
        await this.page.waitForSelector(this.loginError)
        let element = await this.page.$(this.loginError)
        let value = await this.page.evaluate(el => el.textContent, element)
        expect('Epic sadface: Username and password do not match any user in this service').to.equal(value)
    }

}
export default LoginPage;