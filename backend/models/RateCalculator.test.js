const RateCalculator = require('./RateCalculator'); // Adjust the path as needed

test('should create a new rate calculation', () => {
  const newRate = {
    id: 1,
    distance: 10,
    time: 15,
    demandFactor: 1.2,
  };
  const createdRate = RateCalculator.create(newRate);
  expect(createdRate.id).toEqual(newRate.id);
});

// Add more tests as needed
