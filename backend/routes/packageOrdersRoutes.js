const express = require('express');
const router = express.Router();
const packageOrdersController = require('../controllers/packageOrdersController');

router.get('/', packageOrdersController.getAllPackageOrders);
router.get('/:id', packageOrdersController.getPackageOrderById);
router.post('/', packageOrdersController.createPackageOrder);
router.put('/:id', packageOrdersController.updatePackageOrder);
router.delete('/:id', packageOrdersController.deletePackageOrder);

module.exports = router;
