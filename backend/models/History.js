const histories = []; // Mock database

class History {
  constructor(id, action, timestamp) {
    this.id = id;
    this.action = action;
    this.timestamp = timestamp;
  }

  static resetDatabase() {
    histories.length = 0;
  }

  static findAll() {
    return histories;
  }

  static findById(id) {
    return histories.find(history => history.id === id);
  }

  static create(data) {
    const newHistory = new History(data.id, data.action, data.timestamp);
    histories.push(newHistory);
    return newHistory;
  }

  static update(id, updatedData) {
    const history = this.findById(id);
    if (history) {
      Object.assign(history, updatedData);
      return history;
    }
    return null;
  }

  static delete(id) {
    const index = histories.findIndex(history => history.id === id);
    if (index !== -1) {
      histories.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = History;
