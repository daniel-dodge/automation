const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
const {crossOff} = require('./crossOff')
const {deleteMovie} = require('./deleted')
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})
afterEach(async ()=>{
    driver.navigate().refresh()
})
afterAll(async () => {
    await driver.quit()
})

test('Cross off function works', async ()=>{
    await crossOff(driver)
    await driver.sleep(5000)
})

test('Delete function works', async ()=>{
    await deleteMovie(driver)
    await driver.sleep(5000)
})