const BackgroundChecks = require('../models/BackgroundChecks');

exports.getAllBackgroundChecks = async (req, res) => {
  const checks = await BackgroundChecks.findAll();
  res.json(checks);
};

exports.getBackgroundCheckById = async (req, res) => {
  const check = await BackgroundChecks.findById(req.params.id);
  res.json(check);
};

exports.createBackgroundCheck = async (req, res) => {
  const newCheck = await BackgroundChecks.create(req.body);
  res.json(newCheck);
};

exports.updateBackgroundCheck = async (req, res) => {
  const updatedCheck = await BackgroundChecks.update(req.params.id, req.body);
  res.json(updatedCheck);
};

exports.deleteBackgroundCheck = async (req, res) => {
  await BackgroundChecks.delete(req.params.id);
  res.json({ message: 'Background check deleted' });
};

module.exports = exports;
