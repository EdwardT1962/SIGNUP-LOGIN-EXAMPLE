const Chat = require('./Chat'); // Adjust the path as needed

test('should create a new chat message', () => {
  const newChat = {
    id: 1,
    clientId: 1,
    driverId: 1,
    message: "Hello",
    timestamp: "2023-08-22T12:00:00Z"
  };
  const createdChat = Chat.create(newChat);
  expect(createdChat.id).toEqual(newChat.id);
});

// Add more tests as needed
