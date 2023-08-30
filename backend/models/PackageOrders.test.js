const PackageOrders = require('./PackageOrders'); // Adjust the path as needed

describe('PackageOrders Class', () => {
  beforeEach(() => {
    PackageOrders.resetDatabase();
  });

  test('should create a new order', () => {
    const newOrder = {
      id: 1,
      clientId: 2,
      packageType: 'Standard',
      status: 'Pending',
      deliveryAddress: '123 Main St'
    };
    const createdOrder = PackageOrders.create(newOrder);
    expect(createdOrder.id).toEqual(newOrder.id);
  });

  test('should find all orders', () => {
    expect(PackageOrders.findAll()).toEqual([]);
  });

  test('should find order by ID', () => {
    const order = PackageOrders.create({ id: 1 });
    const foundOrder = PackageOrders.findById(1);
    expect(foundOrder).toEqual(order);
  });

  test('should update an order', () => {
    const order = PackageOrders.create({ id: 1 });
    const updatedData = { status: 'Shipped' };
    const updatedOrder = PackageOrders.update(1, updatedData);
    expect(updatedOrder.status).toEqual('Shipped');
  });

  test('should delete an order', () => {
    const order = PackageOrders.create({ id: 1 });
    PackageOrders.delete(1);
    const foundOrder = PackageOrders.findById(1);
    expect(foundOrder).toBeUndefined();
  });
});
