const express = require('express');
const router = express.Router();
const paymentsToDriversController = require('../controllers/paymentsToDriversController');

router.get('/', paymentsToDriversController.getAllPaymentsToDrivers);
router.get('/:id', paymentsToDriversController.getPaymentToDriverById);
router.post('/', paymentsToDriversController.createPaymentToDriver);
router.put('/:id', paymentsToDriversController.updatePaymentToDriver);
router.delete('/:id', paymentsToDriversController.deletePaymentToDriver);

module.exports = router;
