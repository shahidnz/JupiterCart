import { Page, Locator, expect } from '@playwright/test';

export class ShopPage {
    readonly page: Page;
    readonly shopTab: Locator;
    readonly productList: Locator;
    readonly buyButtons: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.shopTab = page.locator('#nav-shop > a[href="#/shop"]');
      this.productList = page.locator('.products');
      this.buyButtons = page.locator('.btn-success');
    }
  
    async navigate() {
      await this.shopTab.click();
    }
  
    async verifyPageLoaded() {
      await expect(this.productList).toBeVisible();
      await expect(this.buyButtons.first()).toBeVisible();
      await expect(this.page).toHaveURL(/#\/shop$/);
    }
  
    async addItemToCart(itemName: string) {
      const product = this.page.locator(`xpath=//p[@class="product-title" and text()="${itemName}"]/following-sibling::p/a[contains(@class, "btn-success")]`);
      await product.click();
    }
  
    async verifyItemAdded(itemName: string) {
      const cartCount = this.page.locator('.cart-count');
      await expect(cartCount).toHaveText(/[1-9]/);
      await this.page.goto('/cart'); // Relative to baseURL
      const cartItem = this.page.locator(`xpath=//td[text()="${itemName}"]`);
      await expect(cartItem).toBeVisible();
    }
  }