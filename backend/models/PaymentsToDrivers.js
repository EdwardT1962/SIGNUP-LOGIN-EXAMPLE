const paymentsToDrivers = []; // Mock database

class PaymentsToDrivers {
  constructor(id, driverId, amount, date, status) {
    this.id = id;
    this.driverId = driverId;
    this.amount = amount;
    this.date = date;
    this.status = status;
  }

  static resetDatabase() {
    paymentsToDrivers.length = 0;
  }

  static findAll() {
    return paymentsToDrivers;
  }

  static findById(id) {
    return paymentsToDrivers.find(payment => payment.id === id);
  }

  static create(data) {
    const newPayment = new PaymentsToDrivers(data.id, data.driverId, data.amount, data.date, data.status);
    paymentsToDrivers.push(newPayment);
    return newPayment;
  }

  static update(id, updatedData) {
    const payment = this.findById(id);
    if (payment) {
      Object.assign(payment, updatedData);
      return payment;
    }
    return null;
  }

  static delete(id) {
    const index = paymentsToDrivers.findIndex(payment => payment.id === id);
    if (index !== -1) {
      paymentsToDrivers.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = PaymentsToDrivers;
