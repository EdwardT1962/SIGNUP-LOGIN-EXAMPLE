const Driver = require('../models/Driver');

exports.getAllDrivers = async (req, res) => {
  const drivers = await Driver.findAll();
  res.json(drivers);
};

exports.getDriverById = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  res.json(driver);
};

exports.createDriver = async (req, res) => {
  const newDriver = await Driver.create(req.body);
  res.json(newDriver);
};

exports.updateDriver = async (req, res) => {
  const updatedDriver = await Driver.update(req.params.id, req.body);
  res.json(updatedDriver);
};

exports.deleteDriver = async (req, res) => {
  await Driver.delete(req.params.id);
  res.json({ message: 'Driver deleted' });
};

module.exports = exports;
