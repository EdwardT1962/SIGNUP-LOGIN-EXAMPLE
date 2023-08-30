const PaymentsToDrivers = require('../models/PaymentsToDrivers');

exports.getAllPaymentsToDrivers = async (req, res) => {
  const payments = await PaymentsToDrivers.findAll();
  res.json(payments);
};

exports.getPaymentToDriverById = async (req, res) => {
  const payment = await PaymentsToDrivers.findById(req.params.id);
  res.json(payment);
};

exports.createPaymentToDriver = async (req, res) => {
  const newPayment = await PaymentsToDrivers.create(req.body);
  res.json(newPayment);
};

exports.updatePaymentToDriver = async (req, res) => {
  const updatedPayment = await PaymentsToDrivers.update(req.params.id, req.body);
  res.json(updatedPayment);
};

exports.deletePaymentToDriver = async (req, res) => {
  await PaymentsToDrivers.delete(req.params.id);
  res.json({ message: 'Payment deleted' });
};

module.exports = exports;
