module.exports = {
    '@tags': ['magento'],
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
        var text =  browser.globals.text;
        // var res = text.replace('#', '');
    
// Magento
    browser   
        .useXpath()         
            .url('https://jkalbestore.karyahastadinamika.com/parker/')
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/parker/', 'login page')
            .waitForElementPresent("//input[@type = 'text' and @id = 'username' and @name = 'login[username]']", 'input user data login')
            .setValue("//input[@type = 'text' and @id = 'username' and @name = 'login[username]']", Uname)
            .setValue("//input[@type = 'password' and @id = 'login' and @name = 'login[password]']", [Pword, browser.Keys.ENTER])
            .click("//input[@type = 'submit' and @class = 'form-button' and @title = 'Login']")
            .pause(2000)
            .assert.urlContains('https://jkalbestore.karyahastadinamika.com/index.php/parker/dashboard/', 'home page')
            .moveToElement("//a[@onclick='return false']", 10, 10)
            .waitForElementPresent("//ul[@id='nav']/li[2]/ul/li/a/span")
            .click("//ul[@id='nav']/li[2]/ul/li/a/span")
            .waitForElementPresent("//div[@id='page:main-container']/div[2]/table/tbody/tr/td/h3", 'order page')
            .waitForElementPresent("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']")
            .setValue("//input[@type = 'text' and @name = 'real_order_id' and @id = 'sales_order_grid_filter_real_order_id']", text)
            .waitForElementPresent("//button[@title = 'Search' and @type = 'button' and (text() = 'Search' or . = 'Search')]", 'button search')
            .click("//button[@title = 'Search' and @type = 'button' and (text() = 'Search' or . = 'Search')]")
            .pause(3000)
            .saveScreenshot('tests_output/screensdshoot.png')
            .waitForElementPresent("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]", 'order Node.')
            .saveScreenshot('tests_output/screensdshoot.png')
            browser.expect.element("/html/body/div[1]/div[5]/div/div[3]/div/div[2]/div/table/tbody/tr/td[2]").text.to.equal(text);
            browser.saveScreenshot('tests_output/screensdshoot.png')
            .end();
 }
}