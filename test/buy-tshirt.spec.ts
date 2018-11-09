import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

describe('Given a shopping page', async () => {
  await browser.get('http://automationpractice.com/');

  describe('when want to buy a T shirt', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    await menuContentPage.goToTShirtMenu();
    await productListPage.selectProduct();
    await productAddedModalPage.proceedToCheckout();
    await summaryStepPage.proceedToCheckout();

    describe('and login to the application', async () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();
      await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');

      describe('and select default address', async () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        await addressStepPage.proceedToCheckout();

        describe('and pay to the bank', async () => {
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();
          const paymentStepPage: PaymentStepPage = new PaymentStepPage();
          const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
          const orderResumePage: OrderResumePage = new OrderResumePage();
          await shippingStepPage.acceptAndContinue();
          await paymentStepPage.payByBankWire();
          await bankPaymentPage.confirmOrder();

          it('then should be bought a t-shirt', async () => {
            await expect(orderResumePage.getOrderTitle())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
