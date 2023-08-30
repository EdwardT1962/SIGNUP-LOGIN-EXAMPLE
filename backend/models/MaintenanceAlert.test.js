const MaintenanceAlert = require('./MaintenanceAlert'); // Adjust the path as needed

test('should create a new maintenance alert', () => {
  const newAlert = {
    id: 1,
    driverId: 1,
    alertType: "Engine",
    alertMessage: "Engine oil needs to be changed",
  };
  const createdAlert = MaintenanceAlert.create(newAlert);
  expect(createdAlert).toEqual(expect.objectContaining(newAlert));

});

// Add more tests as needed
