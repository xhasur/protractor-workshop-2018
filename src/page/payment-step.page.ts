import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;

  constructor() {
    this.payByBankWireOption = $('.payment_module > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.payByBankWireOption.click();
  }
}
