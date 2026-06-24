const { test } = require('@playwright/test');

test('Add product to cart', async ({ page }) => {

    // Open Amazon
    await page.goto('https://www.amazon.in');

    // Search product
    await page
        .getByPlaceholder('Search Amazon.in')
        .fill('iPhone');

    // Click search
    await page
        .getByRole('button', { name: 'Go' })
        .click();

    // Click first product
    await page
        .locator('h2 a')
        .first()
        .click();

    // Add to cart
    await page
        .getByRole('button', { name: 'Add to Cart' })
        .click();

    // Proceed to checkout
    await page
        .getByRole('button', {
            name: /Proceed to checkout/i
        })
        .click();
});