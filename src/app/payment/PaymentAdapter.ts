import { PaymentDetails } from "./PaymentDetails";

export class PaymentAdapter {
    processPayment(paymentDetails: PaymentDetails): { status: string; transactionId?: string } {
      if (paymentDetails.method === 'credit_card') {
        // make transaction needed 
        return { status: 'success', transactionId: 'txn_1234567890' };
      } else {
        return { status: 'failure' };
      }
    }
  }