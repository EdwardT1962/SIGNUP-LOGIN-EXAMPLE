class Client {
    static clients = []; // Mock database
  
    static resetDatabase() {
      this.clients.length = 0;
    }
  
    static create(data) {
      this.clients.push(data);
      return data;
    }
  
    static findAll() {
      return this.clients;
    }
  
    static findById(id) {
      return this.clients.find(client => client.id === id);
    }
  
    static update(id, updatedData) {
      const client = this.findById(id);
      if (client) {
        Object.assign(client, updatedData);
        return client;
      }
      return null;
    }
  
    static delete(id) {
      const index = this.clients.findIndex(client => client.id === id);
      if (index !== -1) {
        this.clients.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = Client;
  