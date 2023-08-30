const Feedback = require('./Feedback'); // Adjust the path as needed

test('should create a new feedback', () => {
  const newFeedback = {
    id: 1,
    clientId: 1,
    driverId: 1,
    rating: 5,
    comment: "Excellent service!",
  };
  const createdFeedback = Feedback.create(newFeedback);
  expect(createdFeedback).toEqual(expect.objectContaining(newFeedback));

});

// Add more tests as needed
