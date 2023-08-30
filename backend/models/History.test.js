const History = require('./History'); // Adjust the path as needed

describe('History Class', () => {
  beforeEach(() => {
    History.resetDatabase();
  });

  test('should create a new history entry', () => {
    const newHistory = {
      id: 1,
      action: 'Login',
      timestamp: '2023-08-22T12:34:56Z'
    };
    const createdHistory = History.create(newHistory);
    expect(createdHistory.id).toEqual(newHistory.id);
  });

  test('should find all history entries', () => {
    expect(History.findAll()).toEqual([]);
  });

  test('should find history entry by ID', () => {
    const history = History.create({ id: 1, action: 'Login', timestamp: '2023-08-22T12:34:56Z' });
    const foundHistory = History.findById(1);
    expect(foundHistory).toEqual(history);
  });

  test('should update a history entry', () => {
    const history = History.create({ id: 1, action: 'Login', timestamp: '2023-08-22T12:34:56Z' });
    const updatedData = { action: 'Logout', timestamp: '2023-08-22T13:34:56Z' };
    const updatedHistory = History.update(1, updatedData);
    expect(updatedHistory.action).toEqual('Logout');
    expect(updatedHistory.timestamp).toEqual('2023-08-22T13:34:56Z');
  });

  test('should delete a history entry', () => {
    const history = History.create({ id: 1, action: 'Login', timestamp: '2023-08-22T12:34:56Z' });
    History.delete(1);
    const foundHistory = History.findById(1);
    expect(foundHistory).toBeUndefined();
  });
});
