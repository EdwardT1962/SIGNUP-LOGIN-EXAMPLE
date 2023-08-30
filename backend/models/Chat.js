const chats = []; // Mock database

class Chat {
  constructor({id, clientId, driverId, message, timestamp}) {
    this.id = id;
    this.clientId = clientId;
    this.driverId = driverId;
    this.message = message;
    this.timestamp = timestamp;
  }

  static findAll() {
    return chats;
  }

  static findById(id) {
    return chats.find(chat => chat.id === id);
  }

  static create(data) {
    const newChat = new Chat(data);
    chats.push(newChat);
    return newChat;
  }

  static delete(id) {
    const index = chats.findIndex(chat => chat.id === id);
    if (index !== -1) {
      chats.splice(index, 1);
    }
  }
}

module.exports = Chat;
