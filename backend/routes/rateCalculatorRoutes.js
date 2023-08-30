const express = require('express');
const rateCalculatorController = require('./rateCalculatorController');
const router = express.Router();

router.get('/', rateCalculatorController.getAllRates);
router.get('/:id', rateCalculatorController.getRateById);
router.post('/', rateCalculatorController.createRate);
router.put('/:id', rateCalculatorController.updateRate);
router.delete('/:id', rateCalculatorController.deleteRate);

module.exports = router;
