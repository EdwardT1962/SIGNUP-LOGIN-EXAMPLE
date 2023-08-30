const Chat = require('./Chat');

exports.getAllChats = (req, res) => {
  const chats = Chat.findAll();
  res.json(chats);
};

exports.getChatById = (req, res) => {
  const chat = Chat.findById(req.params.id);
  res.json(chat);
};

exports.createChat = (req, res) => {
  const newChat = Chat.create(req.body);
  res.json(newChat);
};

exports.deleteChat = (req, res) => {
  Chat.delete(req.params.id);
  res.json({ message: 'Chat deleted successfully' });
};
