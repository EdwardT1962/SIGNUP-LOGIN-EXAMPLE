const RateCalculator = require('./RateCalculator');

exports.getAllRates = (req, res) => {
  const rates = RateCalculator.findAll();
  res.json(rates);
};

exports.getRateById = (req, res) => {
  const rate = RateCalculator.findById(req.params.id);
  res.json(rate);
};

exports.createRate = (req, res) => {
  const newRate = RateCalculator.create(req.body);
  res.json(newRate);
};

exports.updateRate = (req, res) => {
  const updatedRate = RateCalculator.update(req.params.id, req.body);
  res.json(updatedRate);
};

exports.deleteRate = (req, res) => {
  RateCalculator.delete(req.params.id);
  res.json({ message: 'Rate deleted successfully' });
};
