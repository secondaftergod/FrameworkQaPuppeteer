
import Browser from "../common/browser";
import LoginPage from "../Pages/LoginPage";

let page;
let browser;
let login;
jest.setTimeout(35000);

afterAll(() => {
    browser.close();
});

describe("Login Page", () => {
    describe("Open browser and open login page", () => {
        it("Open Browser", async () => {
            browser = await Browser.setupBrowser();
            page = await browser.newPage(browser);
            login = new LoginPage(page);
        });
        it.only("Check login error", async () => {
            await login.gotoPage();
            await login.enterFakeUserData('1','1');
            await login.clickLogin();
            await login.checkErrorLogin();
        });
        it("Login to SwagLabs", async () => {
            await login.gotoPage();
            await login.enterUserData();
            await login.clickLogin();
        }, 16000);
        it("Close Browser", async() => {
            await browser.close();
        })
    });
});

  