const BackgroundChecks = require('./BackgroundChecks'); // Adjust the path as needed

describe('BackgroundChecks Class', () => {
  beforeEach(() => {
    BackgroundChecks.resetDatabase();
  });

  test('should create a new background check', () => {
    const newCheck = {
      id: 1,
      clientId: 2,
      status: 'Pending',
      type: 'Criminal Record',
      result: null
    };
    const createdCheck = BackgroundChecks.create(newCheck);
    expect(createdCheck.id).toEqual(newCheck.id);
  });

  test('should find all background checks', () => {
    expect(BackgroundChecks.findAll()).toEqual([]);
  });

  test('should find background check by ID', () => {
    const check = BackgroundChecks.create({ id: 1 });
    const foundCheck = BackgroundChecks.findById(1);
    expect(foundCheck).toEqual(check);
  });

  test('should update a background check', () => {
    const check = BackgroundChecks.create({ id: 1 });
    const updatedData = { status: 'Completed', result: 'Clear' };
    const updatedCheck = BackgroundChecks.update(1, updatedData);
    expect(updatedCheck.status).toEqual('Completed');
    expect(updatedCheck.result).toEqual('Clear');
  });

  test('should delete a background check', () => {
    const check = BackgroundChecks.create({ id: 1 });
    BackgroundChecks.delete(1);
    const foundCheck = BackgroundChecks.findById(1);
    expect(foundCheck).toBeUndefined();
  });
});
