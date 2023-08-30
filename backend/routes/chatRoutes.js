const express = require('express');
const chatController = require('./chatController');
const router = express.Router();

router.get('/', chatController.getAllChats);
router.get('/:id', chatController.getChatById);
router.post('/', chatController.createChat);
router.delete('/:id', chatController.deleteChat);

module.exports = router;
