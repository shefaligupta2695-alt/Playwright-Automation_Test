Q1. Page Assertions
Write a test called 'verify login page' that:

Goes to 'https://myapp.com/login'
Asserts page title is "Login | MyApp"
Asserts page URL is 'https://myapp.com/login'

import{test,expect} from '@playwright/test'

test('verify login page', async({page}) => {

    await page.goto('https://myapp.com/login');
    await expect (page).toHaveTitle('Login | MyApp');
    await expect (page).toHaveURL('https://myapp.com/login');
})

Q2. Visibility Assertions
Write a test called 'verify elements visible' that:

Goes to 'https://myapp.com/login'
Asserts email field with label "Email" is visible
Asserts password field with placeholder "Enter password" is visible
Asserts "Login" button is visible
Asserts error message "Invalid credentials" is NOT visible

import{test,expect} from '@playwright/test'

test('verify elements visible', async({page}) => {

    await page.goto('https://myapp.com/login');
    await expect (page.getByLabel('Email')).toBeVisible();
    await expect (page.getByPlaceholder('Enter password')).toBeVisible();
    await expect (page.getByRole('button',{name:'Login'})).toBeVisible();
    await expect (page.getByText('Invalid credentials')).not.toBeVisible();
})


Q3. Input Assertions
Write a test called 'verify input values' that:

Goes to 'https://myapp.com/login'
Fills email field — label "Email" — with 'shefali@test.com'
Asserts email field has value 'shefali@test.com'
Fills country dropdown with 'India'
Asserts dropdown has value 'India'

import{test,expect} from '@playwright/test'

test('verify input values', async({page}) => {

    await page.goto('https://myapp.com/login');
    await page.getByLabel('Email').fill('shefali@test.com');
    await expect (page.getByLabel('Email')).toHaveValue('shefali@test.com');
    await page.getByRole('combobox').selectOption('India');
    await expect(page.getByRole('combobox')).toHaveValue('India');
})

Q4. Checkbox Assertions
Write a test called 'verify checkbox' that:

Goes to 'https://myapp.com/login'
Asserts "Remember Me" checkbox is NOT checked initially
Checks the checkbox
Asserts it IS checked now

import{test,expect} from '@playwright/test'

test('verify checkbox', async({page}) => {

    await page.goto('https://myapp.com/login');
    await expect (page.getByRole('checkbox',{name:'Remember Me'})).not.toBeChecked();
    await page.getByRole('checkbox',{name:'Remember Me'}).check();
    await expect (page.getByRole('checkbox',{name:'Remember Me'})).toBeChecked();
})

Q5. Button State Assertions
Write a test called 'verify button states' that:

Goes to 'https://myapp.com/login'
Asserts "Login" button is enabled
Asserts "Forgot Password" link is visible
Asserts "Register" button is enabled
Fills email and password
Clicks login
Asserts "Login" button is NOT visible after login

import{test,expect} from '@playwright/test'

test('verify button states', async({page}) => {

    await page.goto('https://myapp.com/login');
    await expect (page.getByRole('button',{name:'Login'})).toBeEnabled();
    await expect (page.getByRole('link',{name:'Forgot Password'})).toBeVisible();
    await expect (page.getByRole('button',{name:'Register'})).toBeEnabled();
    
    await page.getByLabel('Email').fill('shefali@test.com');          
    await page.getByPlaceholder('Enter password').fill('Test123');
    await page.getByRole('button',{name:'Login'}).click();

    await expect (page.getByRole('button',{name:'Login'})).not.toBeVisible();
})

Q6. Text Assertions
Write a test called 'verify text content' that:

Goes to 'https://myapp.com/dashboard'
Asserts heading — role "heading" name "Dashboard" — contains text "Dashboard"
Asserts welcome message — role "paragraph" — has exact text "Welcome Shefali!"
Asserts footer — getByTestId("footer") — contains text "2024"


import{test,expect} from '@playwright/test'

test('verify text content', async({page}) => {

    await page.goto('https://myapp.com/dashboard');
    await expect (page.getByRole('heading',{name:'Dashboard'})).toContainText('Dashboard');
    await expect (page.getByRole('paragraph')).toHaveText('Welcome Shefali!');
    await expect (page.getByTestId('footer')).toContainText('2024');
})

Q7. Count Assertions
Write a test called 'verify element count' that:

Goes to 'https://myapp.com/products'
Asserts there are exactly 6 product cards — role "listitem"
Asserts there are exactly 2 filter checkboxes — role "checkbox"
Asserts there is exactly 1 search button — role "button" name "Search"

import{test,expect} from '@playwright/test'

test('verify element count', async({page}) => {

    await page.goto('https://myapp.com/products');
    await expect (page.getByRole('listitem')).toHaveCount(6);
    await expect (page.getByRole('checkbox')).toHaveCount(2);
    await expect (page.getByRole('button',{name:'Search'})).toHaveCount(1);
})

Q8. Full Login Assertion Test
Write a complete test called 'full login test' that:

Goes to 'https://myapp.com/login'
Asserts title is "Login | MyApp"
Asserts login button — role "button" name "Login" — is enabled
Fills email — label "Email" — 'shefali@test.com'
Fills password — placeholder "Enter password" — 'secret123'
Asserts email field has value 'shefali@test.com'
Clicks login button — role "button" name "Login"
Asserts URL changed to 'https://myapp.com/dashboard'
Asserts heading — role "heading" name "Dashboard" — is visible
Asserts welcome text "Welcome Shefali!" is visible — use getByText

import{test,expect} from '@playwright/test'

test('full login test', async({page}) => {

    await page.goto('https://myapp.com/login');
    await expect (page).toHaveTitle('Login | MyApp');
    await expect (page.getByRole('button',{name:'Login'})).toBeEnabled();
    await page.getByLabel('Email').fill('shefali@test.com');
    await page.getByPlaceholder('Enter password').fill('secret123');
    await expect (page.getByLabel('Email')).toHaveValue('shefali@test.com');
    await page.getByRole('button',{name:'Login'}).click();
    await expect (page).toHaveURL('https://myapp.com/dashboard');
    await expect (page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    await expect (page.getByText('Welcome Shefali!')).toBeVisible();
})

Q9. Spot the Mistakes
Find all mistakes in this code:

import { test, expect } from '@playwright/test';

test('assertion test', async ({ page }) => {
  await page.goto('https://myapp.com');
  await expect(page).toHaveURL['https://myapp.com'];
  await expect(page.getByRole('heading', { name: 'Welcome' })).toHaveText('Welcome');
  await expect(page.getByRole('checkbox', { name: 'Remember Me' })).isChecked();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled;
  await expect(page.getByText('Error')).not.toBeVisible();
});

import { test, expect } from '@playwright/test';

test('assertion test', async ({ page }) => {     
  await page.goto('https://myapp.com');
  await expect(page).toHaveURL('https://myapp.com');
  await expect(page.getByRole('heading', { name: 'Welcome' })).toContainText('Welcome');
  await expect(page.getByRole('checkbox', { name: 'Remember Me' })).toBeChecked();
  await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled();
  await expect(page.getByText('Error')).not.toBeVisible();
});

Q10. Negative Assertions
Write a test called 'verify error messages' that:

Goes to 'https://myapp.com/login'
Fills email — placeholder "Enter email" — with 'wrong@test.com'
Fills password — placeholder "Enter password" — with 'wrongpass'
Clicks login button — role "button" name "Login"
Asserts error message — getByText("Invalid credentials") — IS visible
Asserts dashboard heading — role "heading" name "Dashboard" — is NOT visible
Asserts URL is still 'https://myapp.com/login' — did NOT change
Asserts login button — role "button" name "Login" — is still enabled

import { test, expect } from '@playwright/test';

test('verify error messages', async ({ page }) => {     
  await page.goto('https://myapp.com/login');
  await page.getByPlaceholder('Enter email').fill('wrong@test.com');
  await page.getByPlaceholder('Enter password').fill('wrongpass');
  await page.getByRole('button',{name:'Login'}).click();
  await expect (page.getByText('Invalid credentials')).toBeVisible();
  await expect (page.getByRole('heading',{name:'Dashboard'})).not.toBeVisible();
  await expect (page).toHaveURL('https://myapp.com/login');
  await expect (page.getByRole('button',{name:'Login'})).toBeEnabled();
});