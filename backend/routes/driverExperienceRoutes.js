const express = require('express');
const router = express.Router();
const driverExperienceController = require('../controllers/driverExperienceController');

router.get('/', driverExperienceController.getAllDriverExperiences);
router.get('/:id', driverExperienceController.getDriverExperienceById);
router.post('/', driverExperienceController.createDriverExperience);
router.put('/:id', driverExperienceController.updateDriverExperience);
router.delete('/:id', driverExperienceController.deleteDriverExperience);

module.exports = router;
