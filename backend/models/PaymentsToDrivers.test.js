const PaymentsToDrivers = require('./PaymentsToDrivers'); // Adjust the path as needed

describe('PaymentsToDrivers Class', () => {
  beforeEach(() => {
    PaymentsToDrivers.resetDatabase();
  });

  test('should create a new payment to driver', () => {
    const newPayment = {
      id: 1,
      driverId: 2,
      amount: 100,
      date: '2023-08-22',
      status: 'Completed'
    };
    const createdPayment = PaymentsToDrivers.create(newPayment);
    expect(createdPayment.id).toEqual(newPayment.id);
  });

  test('should find all payments to drivers', () => {
    expect(PaymentsToDrivers.findAll()).toEqual([]);
  });

  test('should find payment by ID', () => {
    const payment = PaymentsToDrivers.create({ id: 1, driverId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    const foundPayment = PaymentsToDrivers.findById(1);
    expect(foundPayment).toEqual(payment);
  });

  test('should update a payment', () => {
    const payment = PaymentsToDrivers.create({ id: 1, driverId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    const updatedData = { amount: 150, status: 'Pending' };
    const updatedPayment = PaymentsToDrivers.update(1, updatedData);
    expect(updatedPayment.amount).toEqual(150);
    expect(updatedPayment.status).toEqual('Pending');
  });

  test('should delete a payment', () => {
    const payment = PaymentsToDrivers.create({ id: 1, driverId: 2, amount: 100, date: '2023-08-22', status: 'Completed' });
    PaymentsToDrivers.delete(1);
    const foundPayment = PaymentsToDrivers.findById(1);
    expect(foundPayment).toBeUndefined();
  });
});
