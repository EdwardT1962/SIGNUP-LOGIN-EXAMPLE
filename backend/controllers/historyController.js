const History = require('../models/History');

exports.getAllHistories = async (req, res) => {
  const histories = await History.findAll();
  res.json(histories);
};

exports.getHistoryById = async (req, res) => {
  const history = await History.findById(req.params.id);
  res.json(history);
};

exports.createHistory = async (req, res) => {
  const newHistory = await History.create(req.body);
  res.json(newHistory);
};

exports.updateHistory = async (req, res) => {
  const updatedHistory = await History.update(req.params.id, req.body);
  res.json(updatedHistory);
};

exports.deleteHistory = async (req, res) => {
  await History.delete(req.params.id);
  res.json({ message: 'History deleted' });
};

module.exports = exports;
