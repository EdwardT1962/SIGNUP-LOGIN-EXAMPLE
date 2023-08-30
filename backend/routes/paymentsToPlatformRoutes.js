const express = require('express');
const router = express.Router();
const paymentsToPlatformController = require('../controllers/paymentsToPlatformController');

router.get('/', paymentsToPlatformController.getAllPaymentsToPlatform);
router.get('/:id', paymentsToPlatformController.getPaymentToPlatformById);
router.post('/', paymentsToPlatformController.createPaymentToPlatform);
router.put('/:id', paymentsToPlatformController.updatePaymentToPlatform);
router.delete('/:id', paymentsToPlatformController.deletePaymentToPlatform);

module.exports = router;
