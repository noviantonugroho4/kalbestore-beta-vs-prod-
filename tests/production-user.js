module.exports = {
    '@tags': ['production-user'],
    'Test Kalbestore.com (DESKTOP-PRODUCTION)'(browser){
        
        const emailLogin = 'noviantonugroho4@gmail.com'
        const passLogin = 'asdqwe123';
        const search = 'input[name="q"]';
        const inputSearch = 'prenagen';
        const namaDepan = 'Shella';
        const namaBelakang = 'anggraeni';
        const email ='nugie@gmail.com';
        const telepon = '08123123123';
        const labelAlamat = 'Rumah';
        const alamat = 'griya karawaci blok A 6 no 27';
        const codePos = '15810';
        // Magento
        const Uname = 'nugi';
        const Pword = 'admin123';
        var text;
        var additional = ',00';
        var no_va;
        var text1;
                
    browser
         .url('https://jkalbestore.karyahastadinamika.com/')
         .assert.urlContains('https://jkalbestore.karyahastadinamika.com/', 'Home Page')
         .maximizeWindow();
//POP-UP
    browser
        .useXpath()
            .waitForElementPresent("//div[@id='pop-up-klb']/a", 'close x')
            .click("//div[@id='pop-up-klb']/a");
//Home Page
    browser
        .useXpath()
            .pause(2000)
            .waitForElementVisible("//a[@id = 'masuk']")
            .click("//a[@id = 'masuk']")
            .pause(1000)
            .assert.urlContains("https://jkalbestore.karyahastadinamika.com/customer/account/login/", 'login page')
            .waitForElementPresent("//input[@id='email']", 'email')
            .setValue("//input[@id='email']", emailLogin)
            .assert.elementPresent("//input[@id='pass']", 'password')
            .setValue("//input[@id='pass']", passLogin)
            .assert.elementPresent("//button[@id='send2']", 'masuk')
            .click("//button[@id='send2']")
            .pause(2000)
            .assert.urlContains("https://jkalbestore.karyahastadinamika.com/customer/account/", 'account page')
            .waitForElementPresent("//p[@class = 'note-sign']", 'login confirmed')
            .assert.elementPresent("//input[@id = 'search' and @type = 'text' and @name = 'q' and @placeholder = 'Cari Produk, Promo, Brand atau Artikel disini']", 'Input Search')
            .setValue('//*[@id="search"]', ['Prenagen Mommy French Vanila 400gr', browser.Keys.ENTER]);
    browser
            .pause(1000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/catalogsearch/result/?q=Prenagen+Mommy+French+Vanila+400gr', 'Prenagen Page')
            .pause(2000)
            .waitForElementPresent("//*[@src = 'https://jkalbestore.karyahastadinamika.com/media/catalog/product/cache/1/small_image/440x/9df78eab33525d08d6e5fb8d27136e95/p/r/prenagen_mommy_van_400gr.jpg']", 'product search')
            .click("//*[@type = 'button' and @title = 'Tambah ke Troli']")
            .assert.elementPresent("//*[@src = 'https://jkalbestore.karyahastadinamika.com/skin/frontend/default/kalbegento/images/loading-cart.gif']", 'loading')
            .pause(3000)
            .waitForElementPresent("//div[@class = 'notifyjs-bootstrap-base notifyjs-bootstrap-success']", 'pop-up')
            .click("//div[@class = 'notifyjs-bootstrap-base notifyjs-bootstrap-success']")
            .pause(2000)
            .moveToElement("//a[@id = 'ketroli']", 10, 10)
            .waitForElementPresent("//a[@id = 'ketroli']", 'cart')
            .waitForElementVisible("//*[@class = 'to-troli' and @href = 'https://jkalbestore.karyahastadinamika.com/checkout/cart' and (text() = 'Lanjut ke pembayaran' or . = 'Lanjut ke pembayaran')]", 'lanjut pembayaran')
            .pause(2000)
            .click("//a[@class = 'to-troli' and @href = 'https://jkalbestore.karyahastadinamika.com/checkout/cart']")
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/checkout/cart', 'Cart Page')
            .assert.elementPresent("//span[@class = 'price']", 'Price')
            browser.expect.element("//tr[@id='cart-item-FCPIH070']/td[2]/p/span/span").text.to.endWith('73.000');
            browser.assert.elementPresent("//tr[@id='cart-item-FCPIH070']/td[2]/p[2]", 'Poins');
            browser.expect.element("//tr[@id='cart-item-FCPIH070']/td[2]/p[2]").text.to.startWith('100');
// Total
            //browser.expect.element("//span[@id='changemw']/span").text.to.startWith('100'); Depend Product
            browser.expect.element("//td[@id='gracart']/strong/span/span").text.to.endWith('73.000');
    browser
        .useXpath()
            .click("//button[@type = 'button' and @class = 'button btn-proceed-checkout btn-checkout']")
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/checkout/onepage/', 'CHECKOUT Page')
            .pause(2000)
            .waitForElementPresent("//a[@class = 'btn-payments popup' and @href = '#payments-modal']")
            .click("//a[@class = 'btn-payments popup' and @href = '#payments-modal']")
            .waitForElementPresent("//*[@id = 'payments-modal' and @class = 'white-popup-full']")
            .moveToElement("//dt[@id = 'dt_method_prismalink_bcava']", 10, 10)
            .click("//input[@id = 'p_method_prismalink_bcava' and @type = 'radio']")
            .pause(2000)
            .waitForElementPresent("//div[@class = 'payment-left']")
            .assert.elementPresent("//div[@class = 'subtotal-left']", 'Total Harga');
            browser.expect.element("/html/body/div[1]/div/div[2]/div/div/div[2]/div[2]/div[2]/div[2]/div[2]").text.to.endWith('73.000');
            browser.assert.elementPresent("//div[@class = 'subtotal-left subtotal-information']", 'Biaya ONGKIR');
            browser.expect.element("/html/body/div[1]/div/div[2]/div/div/div[2]/div[2]/div[2]/div[3]/div[2]").text.to.endWith('10.000');
            browser.assert.elementPresent("//div[@class = 'grandtotal-left']", 'Total Pembayaran');
            browser.expect.element("//form[@id='checkoutV2Form']/div/div/div[2]").text.to.endWith('83.000');
            browser.getText('css selector', '#checkoutV2Form > div > div.grandtotal-wrapper.grandtotal-bottom > div.grandtotal-right', function(result) {
                text1 = result.value;
                var grnd_ttl = text1.replace(text1, text1+additional);
                console.log(grnd_ttl);
            browser.assert.elementPresent("//form[@id='checkoutV2Form']/div/div/div[4]/div", 'Total Pembayaran');
            //browser.expect.element("//form[@id='checkoutV2Form']/div/div/div[4]/div[2]").text.to.equal('150 Poin'); Depen product
            browser.click("//button[@type = 'submit' and @class = 'btn-bottom']")
            .pause(2000)
            .assert.urlContains("https://jkalbestore.karyahastadinamika.com/checkout/onepage/success/")
            .waitForElementPresent("/html/body/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/p/a", 'nomor Virtual Account')
            browser.getText('css selector', 'body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div.success-right > div.your-va-numb > p > a', function(result) {
                no_va = result.value;
                console.log(no_va);
            browser.waitForElementPresent("/html/body/div[1]/div/div[2]/div/div[1]/div[2]/p[1]/a", 'nomor pesanan');
            browser.getText('css selector', 'body > div.wrapper > div > div.main-container.col2-right-layout > div > div.col-main > div.success-right > p:nth-child(5) > a', function(result) {
                text = result.value;
                var ret = text.replace('# ','');
                console.log(ret);
                browser.saveScreenshot('tests_output/prod-user.png')
// Magento
    browser        
            .url('https://jkalbestore.karyahastadinamika.com/parker/')
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/parker/', 'login page')
            .waitForElementPresent("//input[@type = 'text' and @id = 'username' and @name = 'login[username]']");
    browser
            .setValue("//input[@type = 'text' and @id = 'username' and @name = 'login[username]']", Uname);
            browser
            .setValue("//input[@type = 'password' and @id = 'login' and @name = 'login[password]']", [Pword, browser.Keys.ENTER])
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/index.php/parker/dashboard/', 'home page')
            .moveToElement("//a[@onclick='return false']", 10, 10)
            .waitForElementPresent("//ul[@id='nav']/li[2]/ul/li/a/span")
            .click("//ul[@id='nav']/li[2]/ul/li/a/span")
            .waitForElementPresent("//div[@id='page:main-container']/div[2]/table/tbody/tr/td/h3", 'order page')
            .waitForElementPresent("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']")
            .setValue("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']", [ret, browser.Keys.ENTER])
            .pause(3000)
            .waitForElementPresent("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]", 'order Node.')
            browser.expect.element("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]").text.to.equal(ret);
            browser.saveScreenshot('tests_output/prod-user-magento.png');
            browser.moveToElement("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]", 10, 10)
            .click("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]")
            .pause(1000)
            .waitForElementPresent("//*[@id='loading_mask_loader']")
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/index.php/parker/sales_order/view/order_id/')
            .waitForElementPresent("//div[@id='sales_order_view_tabs_order_info_content']/div/div[8]/div/fieldset/table/tbody/tr/td[2]/strong", 'No. Virtual Account');
            browser.expect.element("//div[@id='sales_order_view_tabs_order_info_content']/div/div[8]/div/fieldset/table/tbody/tr/td[2]/strong").text.to.equal(no_va);
            browser.assert.elementPresent("//div[@id='sales_order_view_tabs_order_info_content']/div/div[16]/div[2]/table/tfoot/tr/td[2]/strong/span", 'Grand Total');
            browser.expect.element("//div[@id='sales_order_view_tabs_order_info_content']/div/div[16]/div[2]/table/tfoot/tr/td[2]/strong/span").text.to.equal(grnd_ttl);
            });});});
            browser.saveScreenshot('tests_output/prod-user-magento.png')
            .end();
 }
}