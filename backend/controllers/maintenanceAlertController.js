const MaintenanceAlert = require('./MaintenanceAlert');

exports.getAllAlerts = (req, res) => {
  const alerts = MaintenanceAlert.findAll();
  res.json(alerts);
};

exports.getAlertById = (req, res) => {
  const alert = MaintenanceAlert.findById(req.params.id);
  res.json(alert);
};

exports.createAlert = (req, res) => {
  const newAlert = MaintenanceAlert.create(req.body);
  res.json(newAlert);
};

exports.deleteAlert = (req, res) => {
  MaintenanceAlert.delete(req.params.id);
  res.json({ message: 'Alert deleted successfully' });
};
