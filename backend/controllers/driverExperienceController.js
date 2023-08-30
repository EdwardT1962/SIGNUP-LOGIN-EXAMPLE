const DriverExperience = require('../models/DriverExperience');

exports.getAllDriverExperiences = async (req, res) => {
  const experiences = await DriverExperience.findAll();
  res.json(experiences);
};

exports.getDriverExperienceById = async (req, res) => {
  const experience = await DriverExperience.findById(req.params.id);
  res.json(experience);
};

exports.createDriverExperience = async (req, res) => {
  const newExperience = await DriverExperience.create(req.body);
  res.json(newExperience);
};

exports.updateDriverExperience = async (req, res) => {
  const updatedExperience = await DriverExperience.update(req.params.id, req.body);
  res.json(updatedExperience);
};

exports.deleteDriverExperience = async (req, res) => {
  await DriverExperience.delete(req.params.id);
  res.json({ message: 'Experience deleted' });
};

module.exports = exports;
