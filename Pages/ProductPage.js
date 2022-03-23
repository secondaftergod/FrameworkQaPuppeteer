import BasePage from './basePage';
const expect = require('chai').expect


class ProductPage extends BasePage {

    constructor(page){
        super(page);
        this.buy_page_title=".title"
        this.items_name="div[class*='inventory_item_name']"
        this.items_price="div[class*='inventory_item_price']"
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
        var linkTexts = await this.page.$$eval(this.items_name,
                elements=> elements.map(item=>item.textContent))
        this.items_list=linkTexts
        return this.items_list
    }
    async get_items_price(){
        await this.page.waitForSelector(this.items_price)
        var linkTexts = await this.page.$$eval(this.items_price,
                elements=> elements.map(item=>parseFloat(item.textContent.replace('$',''))))
        this.items_price_list=linkTexts
    }
    async add_items_toBasket(){
        await this.page.waitForSelector(this.item_buttons)
        await this.page.$$eval(this.item_buttons, el => {
            el.map(el => {el.click()})
            }); 
    }
    async get_items_inBasket(){
        const element = await this.page.$(this.basket_in);
        var text;
        try{
            var success = true;
            text = await (await element.getProperty("innerText")).jsonValue();
        }
        catch(TypeError){
            success = false;
            return 0
        }
        if(success) {
            return await text;
        }
        
    } 
    get_items_name_sortA_Z(){
        expect(this.items_list[0]).equal(this.items_list.sort()[0]);
    }
    
}
export default ProductPage;