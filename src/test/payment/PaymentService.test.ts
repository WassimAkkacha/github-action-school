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
        //TODO: Create paymentDetails object initialized with fake data
        //TODO: Create mockProcessPaymentResponse object containing success status and a fake transactiondId
        //TODO: Mock processPayment implementation
    // Act
        //const result = paymentService.makePayment(paymentDetails);
    // Assert
        // Check the returned result is equal to the success message returned by makePayment with thefake  transactionId you have defined in mockProcessPaymentResponse
        // Check that processPayment inside makePayment has been called with paymentDetails
  });

  test('should throw an error for payment failure', () => {
    // Arrange
        //TODO: Create paymentDetails object initialized with fake data
        //TODO: Create mockProcessPaymentResponse object containing failure status
        //TODO: Mock processPayment implementation
    // Act & Assert
        //expect(() => paymentService.makePayment(paymentDetails)).toThrow('Payment failed');
  });

  test('should throw an error for invalid payment amount', () => {
    // Arrange
        //TODO: Create paymentDetails object initialized with fake data where amount should be negative or undefined
    // Act & Assert
        //expect(() => paymentService.makePayment(paymentDetails)).toThrow('Invalid payment amount');
  });
});
