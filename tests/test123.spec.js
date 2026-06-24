const { test,expect } = require('@playwright/test');

test('Amazon', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.fill('#twotabsearchtextbox','mobiles');

    await page.click('#nav-search-submit-button');

    await page.waitForTimeout(5000);

    const products = page.locator('h2 span');

    const count = await products.count();

    console.log("Count:", count);

    for(let i = 0; i < count; i++) {

        const title =
            await products.nth(i).textContent();

        console.log(title);
    }
});
