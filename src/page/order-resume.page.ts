import { $, ElementFinder } from 'protractor';

export class OrderResumePage {
  private orderTitleLabel: ElementFinder;

  constructor() {
    this.orderTitleLabel = $('#center_column > div > p > strong');
  }

  public async getOrderTitle(): Promise<string> {
    const titleLabel = await this.orderTitleLabel.getText();

    return titleLabel;
  }
}
