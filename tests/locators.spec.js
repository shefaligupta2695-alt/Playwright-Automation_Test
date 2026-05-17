import { test, expect } from '@playwright/test';

test('Login with invalid password', async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  // Open login modal
  await page.getByRole('link', { name: 'Log in' }).click();

  // Fill credentials
  await page.fill('#loginusername','shefaligupta');
  await page.fill('#loginpassword','shefali@123');

  // Handle alert before clicking
  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  // Click login button inside modal
  await page.getByRole('button', { name: 'Log in' }).click();

 // Assert dialog message
  page.once('dialog', async dialog => {

    // Assertion for popup message
    expect(dialog.message()).toBe('Wrong password.');

    await dialog.accept();
  });

});

test('Open category-Phones', async ({ page }) => {

  await page.goto('https://demoblaze.com/');

  // Open login modal
  await page.getByRole('link', { name: 'Phones' }).click();

  await expect(page.getByRole('Link', { name: 'Samsung galaxy s6' })).toBeVisible();
  await expect(page.getByRole('Link', { name: 'Nokia lumia 1520' })).toBeVisible();
  await expect(page.getByRole('Link', { name: 'Nexus 6' })).toBeVisible();
});