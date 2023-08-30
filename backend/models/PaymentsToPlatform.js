const paymentsToPlatform = []; // Mock database

class PaymentsToPlatform {
  constructor(id, clientId, amount, date, status) {
    this.id = id;
    this.clientId = clientId;
    this.amount = amount;
    this.date = date;
    this.status = status;
  }

  static resetDatabase() {
    paymentsToPlatform.length = 0;
  }

  static findAll() {
    return paymentsToPlatform;
  }

  static findById(id) {
    return paymentsToPlatform.find(payment => payment.id === id);
  }

  static create(data) {
    const newPayment = new PaymentsToPlatform(data.id, data.clientId, data.amount, data.date, data.status);
    paymentsToPlatform.push(newPayment);
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
    const index = paymentsToPlatform.findIndex(payment => payment.id === id);
    if (index !== -1) {
      paymentsToPlatform.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = PaymentsToPlatform;
