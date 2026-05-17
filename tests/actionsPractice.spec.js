import {test,expect} from '@playwright/test'

test('verify login page', async ({ page }) => {
    await page.goto('https://myapp.com/login');
    await page.getByLabel('Email').fill('shefali@gmail.com');
    await page.getByPlaceholder('Enter password').fill('password123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByText("Welcome Shefali!")).toBeVisible();
});

Q1.Write a test called 'login test' that:

Goes to 'https://myapp.com/login'
Fills email field — label is "Email"
Fills password field — placeholder is "Enter password"
Clicks button "Login"

import {test, expect} from '@playwright/test'

test('login test', async ({page}) => {
  await page.goto('https://myapp.com/login');
  await page.getByLabel('Email').fill('shefali@test.com');
  await page.getByPlaceholder('Enter password').fill('Test123');
  await page.getByRole('button',{name:'Login'}).click();
})

Q2. Clear and Retype
Write a test called 'update email test' that:

Goes to 'https://myapp.com/profile'
Fills email field with 'oldemail@test.com' — label is "Email"
Clears it
Refills with 'shefali@test.com'

import {test,expect} from '@playwright/test'

test('update email test', async({page}) => {
  await page.goto('https://myapp.com/profile');
  await page.getByLabel('Email').fill('oldemail@test.com');
  await page.getByLabel('Email').clear();
  await page.getByLabel('Email').fill('shefali@test.com');

})

Q3. Checkbox
Write a test called 'remember me test' that:

Goes to 'https://myapp.com/login'
Fills email — placeholder "Enter email"
Checks the "Remember Me" checkbox
Verifies it is checked using isChecked()
Then unchecks it

import {test,expect} from '@playwright/test'

test('remember me test', async({page}) =>{
  await page.goto('https://myapp.com/login');
  await page.getByPlaceholder('Enter email').fill('shefali@test.com');
  await page.getByRole('checkbox',{name:'Remember Me'}).check();
  
  await expect (page.getByRole('checkbox',{name:'Remember Me'})).toBeChecked();

  await page.getByRole('checkbox',{name:'Remember Me'}).uncheck();
})

Q4. Dropdown
Write a test called 'select country test' that:

Goes to 'https://myapp.com/register'
Fills name field — placeholder "Enter your name"
Selects "India" from country dropdown — role is "combobox"
Clicks "Submit" button

import{test,expect} from '@playwright/test'

test('select country test', async({page}) => {
  await page.goto('https://myapp.com/register');
  await page.getByPlaceholder('Enter your name').fill('Shefali');
  await page.getByRole('combobox').selectOption('India');
  await page.getByRole('button',{name:'Submit'}).click();
})

Q5. Keyboard Actions
Write a test called 'search test' that:

Goes to 'https://myapp.com'
Fills search box — placeholder "Search here"
Presses "Enter" on keyboard
Waits for search results heading "Search Results" to appear

import { test, expect } from '@playwright/test';

test('search test', async ({ page }) => {
  await page.goto('https://myapp.com');
  await page.getByPlaceholder('Search here').fill('Test item');
  await page.getByPlaceholder('Search here').press('Enter'); 
  await page.getByRole('heading', { name: 'Search Results' }).waitFor();
});

Q6. Hover
Write a test called 'menu hover test' that:

Goes to 'https://myapp.com'
Hovers over "Products" link
Clicks "All Products" link that appears after hover

import { test, expect } from '@playwright/test';

test('menu hover test', async ({ page }) => {
  await page.goto('https://myapp.com');
  await page.getByRole('link',{name:'Products'}).hover();
  await expect (page.getByRole('link',{name:'All Products'})).toBeVisible();
  await page.getByRole('link',{name:'All Products'}).click();
});

Q7. Screenshot
Write a test called 'screenshot test' that:

Goes to 'https://myapp.com/dashboard'
Fills email and password and clicks login
Waits for "Dashboard" heading to appear
Takes a screenshot and saves as 'dashboard.png'

import { test, expect } from '@playwright/test';

test('screenshot test', async ({ page }) => {
  await page.goto('https://myapp.com/dashboard');
  await page.getByLabel('Email').fill('shefali@test.com');
  await page.getByPlaceholder('Enter password').fill('Test123');
  await page.getByRole('button',{name:'Login'}).click();
  await page.getByRole('heading',{name:'Dashboard'}).waitFor();
  await page.screenshot({ path: 'dashboard.png' });
});

Q10. Fix and Rewrite
This code has multiple mistakes — find them all and rewrite correctly:

test('login test', async ({ page }) => {
  await page.go('https://myapp.com/login');
  await page.getByPlaceholder('Enter email').click('shefali@test.com');
  await page.getByLabel('Enter password').fill('secret123');
  await page.getByRole('button', { name: 'Login' }).fill();
  await page.screenshot('login.png');
});

import { test, expect } from '@playwright/test';

test('login test', async ({ page }) => {
  await page.goto('https://myapp.com/login');
  await page.getByPlaceholder('Enter email').fill('shefali@test.com');
  await page.getByPlaceholder('Enter password').fill('secret123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.screenshot({ path: 'login.png' });
});
