import BasePage from './basePage';
const expect = require('chai').expect


class ProductPage extends BasePage {

    constructor(page){
        super(page);
        this.buy_page_title=".title"
        this.items_name="div[class*='inventory_item_name']"
        this.items_pirce="div[class*='inventory_item_price']"
        this.item_buttons="div[class='pricebar']>button"
        this.basket_in="span[class='shopping_cart_badge']"
        this.sort_box="[class='select_container']"
        this.items_list=[]
        this.items_price_list=[]
        

       
    }

    get pageUrl() {
        return this.productUrl;
    }
    async get_items(){
        await this.page.waitForSelector(this.items_name)
        let element = await this.page.$x(this.items_name)
        let value = await this.page.evaluate(el => el.textContent, element[0])
        return value
    }

}
export default ProductPage;