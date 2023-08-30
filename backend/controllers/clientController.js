const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
};

exports.getClientById = async (req, res) => {
  const client = await Client.findById(req.params.id);
  res.json(client);
};

exports.createClient = async (req, res) => {
  const newClient = await Client.create(req.body);
  res.json(newClient);
};

exports.updateClient = async (req, res) => {
  const updatedClient = await Client.update(req.params.id, req.body);
  res.json(updatedClient);
};

exports.deleteClient = async (req, res) => {
  await Client.delete(req.params.id);
  res.json({ message: 'Client deleted' });
};

module.exports = exports;
