import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private products: ElementFinder;

  constructor() {
    this.products = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectProduct(): Promise<void> {
    await this.products.click();
  }
}
