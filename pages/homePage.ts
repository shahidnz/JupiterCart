import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeTab: Locator;
    readonly welcomeMessage: Locator;
    readonly startShoppingButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.homeTab = page.locator('a[href="#/home"]');
      this.welcomeMessage = page.locator('h1:text("Welcome to Jupiter Toys")');
      this.startShoppingButton = page.locator('a.btn-success');
    }
  
    async navigate() {
      await this.homeTab.click();
    }
  
    async verifyPageLoaded() {
      await expect(this.welcomeMessage).toBeVisible();
      await expect(this.startShoppingButton).toBeVisible();
      await expect(this.page).toHaveTitle(/Jupiter Toys/);
    }
  }