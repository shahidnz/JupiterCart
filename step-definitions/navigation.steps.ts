import { test, expect } from '@playwright/test';
import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Browser, chromium, Page, BrowserContext } from '@playwright/test';
import config from '../playwright.config';

import { HomePage } from '@pages/homePage';

let browser: Browser;
let context: BrowserContext;
let page: Page;
let homePage: HomePage;

Given('I am on the Jupiter Toys website', async function () {
    browser = await chromium.launch();
    context = await browser.newContext({ baseURL: config.use?.baseURL });
    page = await context.newPage();
    homePage = new HomePage(page);
    await page.goto('/');
});

When('I click on the Home tab', async function () {
    await homePage.navigate();
});