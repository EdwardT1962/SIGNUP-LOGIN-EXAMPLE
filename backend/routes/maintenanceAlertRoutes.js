const express = require('express');
const maintenanceAlertController = require('./maintenanceAlertController');
const router = express.Router();

router.get('/', maintenanceAlertController.getAllAlerts);
router.get('/:id', maintenanceAlertController.getAlertById);
router.post('/', maintenanceAlertController.createAlert);
router.delete('/:id', maintenanceAlertController.deleteAlert);

module.exports = router;
