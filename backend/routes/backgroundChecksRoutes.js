const express = require('express');
const router = express.Router();
const backgroundChecksController = require('../controllers/backgroundChecksController');

router.get('/', backgroundChecksController.getAllBackgroundChecks);
router.get('/:id', backgroundChecksController.getBackgroundCheckById);
router.post('/', backgroundChecksController.createBackgroundCheck);
router.put('/:id', backgroundChecksController.updateBackgroundCheck);
router.delete('/:id', backgroundChecksController.deleteBackgroundCheck);

module.exports = router;
