import { PaymentDetails, PaymentMethod } from "../../app/payment/PaymentDetails";
import { PaymentService } from "../../app/payment/PaymentService";

describe('Payment Service', () => {
  const paymentAdapterMock = {
    processPayment: jest.fn(),
  }
  let paymentService: PaymentService

  beforeEach(() => {
    paymentService = new PaymentService(paymentAdapterMock)
  });

  test('should successfully process a valid payment', () => {
    // Arrange
    const paymentDetails: PaymentDetails = { amount: 100, currency: 'USD', method: PaymentMethod.CreditCard, cardNumber: '1234-5678-1234-5678' };
    const mockProcessPaymentResponse = { status: 'success', transactionId: 'txn_99' }
    paymentAdapterMock.processPayment.mockImplementation((paymentDetails: PaymentDetails) => mockProcessPaymentResponse)
    // Act
    const result = paymentService.makePayment(paymentDetails);
    // Assert
    expect(result).toBe(`Payment successful. Transaction ID: ${mockProcessPaymentResponse.transactionId}`);
    expect(paymentAdapterMock.processPayment).toHaveBeenCalledWith(paymentDetails);
  });

  test('should throw an error for payment failure', () => {
    // Arrange
    const paymentDetails: PaymentDetails = { amount: 100, currency: 'USD', method: PaymentMethod.PayPal, cardNumber: '1234-5678-1234-5678' };
    const mockProcessPaymentResponse = { status: 'failure' }
    paymentAdapterMock.processPayment.mockImplementation((paymentDetails: PaymentDetails) => mockProcessPaymentResponse)
    // Act & Assert
    expect(() => paymentService.makePayment(paymentDetails)).toThrow('Payment failed');
  });

  test('should throw an error for invalid payment amount', () => {
    // Arrange
    const paymentDetails: PaymentDetails = { amount: -1, currency: 'USD', method: PaymentMethod.CreditCard, cardNumber: '1234-5678-1234-5678' };
    // Act & Assert
    expect(() => paymentService.makePayment(paymentDetails)).toThrow('Invalid payment amount');
  });
});
