class PackageOrders {
    static orders = []; // Mock database
  
    static resetDatabase() {
      this.orders.length = 0;
    }
  
    static create(data) {
      this.orders.push(data);
      return data;
    }
  
    static findAll() {
      return this.orders;
    }
  
    static findById(id) {
      return this.orders.find(order => order.id === id);
    }
  
    static update(id, updatedData) {
      const order = this.findById(id);
      if (order) {
        Object.assign(order, updatedData);
        return order;
      }
      return null;
    }
  
    static delete(id) {
      const index = this.orders.findIndex(order => order.id === id);
      if (index !== -1) {
        this.orders.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = PackageOrders;
  