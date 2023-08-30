const PackageOrders = require('../models/PackageOrders');

exports.getAllPackageOrders = async (req, res) => {
  const orders = await PackageOrders.findAll();
  res.json(orders);
};

exports.getPackageOrderById = async (req, res) => {
  const order = await PackageOrders.findById(req.params.id);
  res.json(order);
};

exports.createPackageOrder = async (req, res) => {
  const newOrder = await PackageOrders.create(req.body);
  res.json(newOrder);
};

exports.updatePackageOrder = async (req, res) => {
  const updatedOrder = await PackageOrders.update(req.params.id, req.body);
  res.json(updatedOrder);
};

exports.deletePackageOrder = async (req, res) => {
  await PackageOrders.delete(req.params.id);
  res.json({ message: 'Order deleted' });
};

module.exports = exports;
