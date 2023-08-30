const Driver = require('./Driver');  // Make sure the path is correct

test('should create a new driver', async () => {
  const newDriver = {
    id: 1,
    vehicleInfo: 'Sedan',
    licenseNumber: 'XYZ123',
    earnings: 1000,
    walletBalance: 500,
    insuranceDetails: 'Full Coverage',
    accountStatus: 'Active',
    otherParameters: {}
  };

  const createdDriver = await Driver.create(newDriver);
  console.log("Created Driver: ", createdDriver);  // Log the createdDriver object
  expect(createdDriver).toEqual(newDriver);  // Check for deep equality
});
