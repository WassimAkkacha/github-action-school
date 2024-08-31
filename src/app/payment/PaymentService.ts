import { PaymentAdapter } from "./PaymentAdapter";
import { PaymentDetails } from "./PaymentDetails";

export class PaymentService {
  private paymentAdapter: PaymentAdapter;

  constructor(paymentProcessor: PaymentAdapter) {
    this.paymentAdapter = paymentProcessor;
  }

  makePayment(paymentDetails: PaymentDetails): string {
    if (!paymentDetails.amount || paymentDetails.amount <= 0) {
      throw new Error('Invalid payment amount');
    }

    const result = this.paymentAdapter.processPayment(paymentDetails);

    if (result.status === 'success') {
      return `Payment successful. Transaction ID: ${result.transactionId}`;
    } else {
      throw new Error('Payment failed');
    }
  }
}
