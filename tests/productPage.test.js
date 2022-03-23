
import Browser from "../common/browser";
import LoginPage from "../Pages/LoginPage";
import ProductPage from "../Pages/ProductPage";

let page;
let browser;
let login;
let product;
let items;
jest.setTimeout(35000);

beforeAll(async()=> {
        browser = await Browser.setupBrowser();
        page = await browser.newPage(browser);
        login = new LoginPage(page);
        await login.gotoPage();
        await login.enterUserData();
        await login.clickLogin();
        product=new ProductPage(page);
        items=await product.get_items();
    });


afterAll(() => {
    browser.close();
});

describe("Product Page", () => {
    describe("Check All Products And check Add,Remove in Basket", () => {
        it.only("Check All Items", async () => {
            expect(items.length).toEqual(6);
        });
        it("Add All Items to Basket", async () => {
            await product.add_items_toBasket();
            expect(parseInt(await product.get_items_inBasket())).toEqual(6);
        });
        it("Remove All Items from Basket", async () => {
            await product.add_items_toBasket();
            expect(await product.get_items_inBasket()).toEqual(0);
        });
        it.only("Sort A-Z", async () => {
            await product.get_items();
            product.get_items_name_sortA_Z();
        });
    });
}); 

  