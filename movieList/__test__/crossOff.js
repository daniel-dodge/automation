const {By} = require('selenium-webdriver')

module.exports = {
    crossOff : async(driver) =>{
        await driver.findElement(By.xpath('//input')).sendKeys('jfdksljkdslfj')

        await driver.findElement(By.xpath('//button')).click()

        await driver.findElement(By.xpath('//span')).click()

        const checked = await driver.findElement(By.xpath('//span[@class="checked"]'))

        const isChecked = checked.isDisplayed()

        expect(isChecked).toBeTruthy()
        
    }
}