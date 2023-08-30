const DriverExperience = require('./DriverExperience'); // Adjust the path as needed

describe('DriverExperience Class', () => {
  beforeEach(() => {
    DriverExperience.resetDatabase();
  });

  test('should create a new driver experience', () => {
    const newExperience = {
      id: 1,
      driverId: 2,
      uberExperience: '2 years',
      lyftExperience: '1 year'
    };
    const createdExperience = DriverExperience.create(newExperience);
    expect(createdExperience.id).toEqual(newExperience.id);
  });

  test('should find all driver experiences', () => {
    expect(DriverExperience.findAll()).toEqual([]);
  });

  test('should find driver experience by ID', () => {
    const experience = DriverExperience.create({ id: 1, driverId: 2, uberExperience: '2 years', lyftExperience: '1 year' });
    const foundExperience = DriverExperience.findById(1);
    expect(foundExperience).toEqual(experience);
  });

  test('should update a driver experience', () => {
    const experience = DriverExperience.create({ id: 1, driverId: 2, uberExperience: '2 years', lyftExperience: '1 year' });
    const updatedData = { uberExperience: '3 years', lyftExperience: '2 years' };
    const updatedExperience = DriverExperience.update(1, updatedData);
    expect(updatedExperience.uberExperience).toEqual('3 years');
    expect(updatedExperience.lyftExperience).toEqual('2 years');
  });

  test('should delete a driver experience', () => {
    const experience = DriverExperience.create({ id: 1, driverId: 2, uberExperience: '2 years', lyftExperience: '1 year' });
    DriverExperience.delete(1);
    const foundExperience = DriverExperience.findById(1);
    expect(foundExperience).toBeUndefined();
  });
});
