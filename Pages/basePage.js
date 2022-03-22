class BasePage {

    constructor(page) {
        this.page = page;
        this.config = require('../config.json');
    }

    get url() {
        return this.config.url.protocol + this.config.url.domain;
    }
    get productUrl(){
        return this.config.url.protocol + this.config.url.domain + this.config.url.productUrl;
    }
}

export default BasePage;