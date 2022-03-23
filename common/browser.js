import puppeteer from "puppeteer";

const desktopResolution = {
    width: 768,
    height: 1080
}


export const Browser = {
    setupBrowser: async () => {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
            slowMo: 60,
            ignoreDefaultArgs: ['--disable-extensions'],
            args: ['--start-maximized',"--disable-setuid-sandbox"],'ignoreHTTPSErrors': true
          });
        return browser;
    }

}

module.exports = Browser;