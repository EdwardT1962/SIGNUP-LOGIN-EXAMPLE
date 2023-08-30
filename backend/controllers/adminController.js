const Admin = require('../models/Admin');

exports.getAllAdmins = async (req, res) => {
  const admins = await Admin.findAll();
  res.json(admins);
};

exports.getAdminById = async (req, res) => {
  const admin = await Admin.findById(req.params.id);
  res.json(admin);
};

exports.createAdmin = async (req, res) => {
  const newAdmin = await Admin.create(req.body);
  res.json(newAdmin);
};

exports.updateAdmin = async (req, res) => {
  const updatedAdmin = await Admin.update(req.params.id, req.body);
  res.json(updatedAdmin);
};

exports.deleteAdmin = async (req, res) => {
  await Admin.delete(req.params.id);
  res.json({ message: 'Admin deleted' });
};

module.exports = exports;
