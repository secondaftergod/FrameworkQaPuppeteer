
import Browser from "../common/browser";
import LoginPage from "../Pages/LoginPage";
import ProductPage from "../Pages/ProductPage";

let page;
let browser;
let login;
let product;
jest.setTimeout(35000);

beforeAll(async()=> {
        browser = await Browser.setupBrowser();
        page = await browser.newPage(browser);
        login = new LoginPage(page);
        await login.gotoPage();
        await login.enterUserData();
        await login.clickLogin();
        product=new ProductPage(page);
    });


afterAll(() => {
    browser.close();
});

describe("Product Page", () => {
    describe("Check All Products And Add to Basket", () => {
        it("Check All Items", async () => {
            let el=await product.get_items();
            console.log(el);
        
        });
    });
}); 

  