const PaymentsToPlatform = require('./PaymentsToPlatform'); // Adjust the path as needed

describe('PaymentsToPlatform Class', () => {
  beforeEach(() => {
    PaymentsToPlatform.resetDatabase();
  });

  test('should create a new payment to platform', () => {
    const newPayment = {
      id: 1,
      clientId: 2,
      amount: 100,
      date: '2023-08-22',
      status: 'Completed'
    };
    const createdPayment = PaymentsToPlatform.create(newPayment);
    expect(createdPayment.id).toEqual(newPayment.id);
  });

  test('should find all payments to platform', () => {
    expect(PaymentsToPlatform.findAll()).toEqual([]);
  });

  test('should find payment by ID', () => {
    const payment = PaymentsToPlatform.create({ id: 1, clientId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    const foundPayment = PaymentsToPlatform.findById(1);
    expect(foundPayment).toEqual(payment);
  });

  test('should update a payment', () => {
    const payment = PaymentsToPlatform.create({ id: 1, clientId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    const updatedData = { amount: 150, status: 'Pending' };
    const updatedPayment = PaymentsToPlatform.update(1, updatedData);
    expect(updatedPayment.amount).toEqual(150);
    expect(updatedPayment.status).toEqual('Pending');
  });

  test('should delete a payment', () => {
    const payment = PaymentsToPlatform.create({ id: 1, clientId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    PaymentsToPlatform.delete(1);
    const foundPayment = PaymentsToPlatform.findById(1);
    expect(foundPayment).toBeUndefined();
  });
});
