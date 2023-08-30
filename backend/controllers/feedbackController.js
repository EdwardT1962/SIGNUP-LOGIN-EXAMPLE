const Feedback = require('./Feedback');

exports.getAllFeedbacks = (req, res) => {
  const feedbacks = Feedback.findAll();
  res.json(feedbacks);
};

exports.getFeedbackById = (req, res) => {
  const feedback = Feedback.findById(req.params.id);
  res.json(feedback);
};

exports.createFeedback = (req, res) => {
  const newFeedback = Feedback.create(req.body);
  res.json(newFeedback);
};

exports.updateFeedback = (req, res) => {
  const updatedFeedback = Feedback.update(req.params.id, req.body);
  res.json(updatedFeedback);
};

exports.deleteFeedback = (req, res) => {
  Feedback.delete(req.params.id);
  res.json({ message: 'Feedback deleted successfully' });
};
