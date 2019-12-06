module.exports = {
    '@tags': ['s'],
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
        const asd = 'nugi';
        const Pword = 'admin123';
        var text =  browser.globals.text;
        const grnd_ttl = 'Rp 83.000';
        const no_va = '791038888100390519';
        const ret = '100390519';
        // var res = text.replace('#', '');
    
    // Magento
    browser        
            .url('https://jkalbestore.karyahastadinamika.com/prker/')
            .pause(2000);
            browser.saveScreenshot('screenshoot.png')
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/parker/', 'login page');
            browser.saveScreenshot('screenshoot.png')
            .waitForElementPresent("//input[@id='username']", 'username')
            .setValue("//input[@id='username']", asd)
            .setValue("//input[@type = 'password' and @id = 'login' and @name = 'login[password]']", [Pword, browser.Keys.ENTER])
            .click("//input[@type = 'submit' and @class = 'form-button' and @title = 'Login']")
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/index.php/parker/dashboard/', 'home page')
            .moveToElement("//a[@onclick='return false']", 10, 10)
            .waitForElementPresent("//ul[@id='nav']/li[2]/ul/li/a/span")
            .click("//ul[@id='nav']/li[2]/ul/li/a/span")
            .waitForElementPresent("//div[@id='page:main-container']/div[2]/table/tbody/tr/td/h3", 'order page')
            .waitForElementPresent("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']")
            .setValue("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']", [ret, browser.Keys.ENTER])
            .pause(1000)
            .waitForElementPresent("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]", 'order Node.')
            browser.expect.element("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]").text.to.equal(ret);
            browser.waitForElementVisible("//*[@id='sales_order_grid_table']/tbody/tr/td[12]/a", 'view detail order')
            .click("//a[@data-column = 'action' and (text() = 'View' or . = 'View')]")
            .pause(1000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/index.php/parker/sales_order/view/order_id/')
            .waitForElementPresent("//div[@id='sales_order_view_tabs_order_info_content']/div/div[8]/div/fieldset/table/tbody/tr/td[2]/strong", 'No. Virtual Account');
            browser.expect.element("//div[@id='sales_order_view_tabs_order_info_content']/div/div[8]/div/fieldset/table/tbody/tr/td[2]/strong").text.to.equal(no_va);
            browser.assert.elementPresent("//div[@id='sales_order_view_tabs_order_info_content']/div/div[16]/div[2]/table/tfoot/tr/td[2]/strong/span", 'Grand Total')
            browser.expect.element("//div[@id='sales_order_view_tabs_order_info_content']/div/div[8]/div/fieldset/table/tbody/tr/td[2]/strong").text.to.equal(grnd_ttl);
            browser.saveScreenshot('tests_output/prod-user-magento.png')
            .end();
 }
}