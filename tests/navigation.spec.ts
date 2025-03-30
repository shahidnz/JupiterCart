import { test, expect } from '@playwright/test';
import { HomePage } from '@pages/homePage';
import { ShopPage } from '@pages/shopPage';

test.describe('Jupiter Toys Navigation Tests', () => {
    let homePage: HomePage;
    let shopPage: ShopPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        shopPage = new ShopPage(page);
        await page.goto('/');
    });

    test('navigate to Home page and verify elements', async ({ page }) => {
        await homePage.navigate();
        await homePage.verifyPageLoaded();
    });
    
      test('navigate to Shop page and verify elements', async ({ page }) => {
        await shopPage.navigate();
        await shopPage.verifyPageLoaded();
    });
});    