const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Điều hướng đến Google
        await driver.get('https://www.google.com');

        // Tìm kiếm từ khóa "Selenium"
        await driver.findElement(By.name('q')).sendKeys('Selenium', Key.RETURN);

        // Đợi kết quả hiển thị
        await driver.wait(until.titleContains('Selenium'), 1000);

        // In tiêu đề của trang kết quả
        let title = await driver.getTitle();
        console.log('Tiêu đề trang:', title);
    } finally {
        // Đóng trình duyệt
        await driver.quit();
    }
})();
