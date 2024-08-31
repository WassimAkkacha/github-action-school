export enum PaymentMethod {
  CreditCard = 'credit_card',
  PayPal = 'paypal',
  BankTransfer = 'bank_transfer'
}

export interface PaymentDetails {
    amount: number;
    currency: string;
    method: PaymentMethod; 
    cardNumber?: string;
  }