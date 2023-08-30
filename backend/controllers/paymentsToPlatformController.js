const PaymentsToPlatform = require('../models/PaymentsToPlatform');

exports.getAllPaymentsToPlatform = async (req, res) => {
  const payments = await PaymentsToPlatform.findAll();
  res.json(payments);
};

exports.getPaymentToPlatformById = async (req, res) => {
  const payment = await PaymentsToPlatform.findById(req.params.id);
  res.json(payment);
};

exports.createPaymentToPlatform = async (req, res) => {
  const newPayment = await PaymentsToPlatform.create(req.body);
  res.json(newPayment);
};

exports.updatePaymentToPlatform = async (req, res) => {
  const updatedPayment = await PaymentsToPlatform.update(req.params.id, req.body);
  res.json(updatedPayment);
};

exports.deletePaymentToPlatform = async (req, res) => {
  await PaymentsToPlatform.delete(req.params.id);
  res.json({ message: 'Payment deleted' });
};

module.exports = exports;
