const Client = require('./Client'); // Adjust the path as needed

describe('Client Class', () => {
  beforeEach(() => {
    Client.resetDatabase();
  });

  test('should create a new client', () => {
    const newClient = {
      id: 1,
      preferredDriverId: 2,
      paymentMethod: 'Credit Card',
      accountBalance: 100,
      accountStatus: 'Active',
      personalInfo: {}
    };
    const createdClient = Client.create(newClient);
    expect(createdClient.id).toEqual(newClient.id);
  });

  test('should find all clients', () => {
    expect(Client.findAll()).toEqual([]);
  });

  test('should find client by ID', () => {
    const client = Client.create({ id: 1 });
    const foundClient = Client.findById(1);
    expect(foundClient).toEqual(client);
  });

  test('should update a client', () => {
    const client = Client.create({ id: 1 });
    const updatedData = { accountBalance: 200 };
    const updatedClient = Client.update(1, updatedData);
    expect(updatedClient.accountBalance).toEqual(200);
  });

  test('should delete a client', () => {
    const client = Client.create({ id: 1 });
    Client.delete(1);
    const foundClient = Client.findById(1);
    expect(foundClient).toBeUndefined();
  });
});
