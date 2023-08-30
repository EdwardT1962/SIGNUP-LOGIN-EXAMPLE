const feedbacks = []; // Mock database

class Feedback {
  constructor(id, clientId, driverId, rating, comment) {
    this.id = id;
    this.clientId = clientId;
    this.driverId = driverId;
    this.rating = rating;
    this.comment = comment;
  }

  static findAll() {
    return feedbacks;
  }

  static findById(id) {
    return feedbacks.find(feedback => feedback.id === id);
  }

  static create(data) {
    const newFeedback = new Feedback(data.id, data.clientId, data.driverId, data.rating, data.comment);
    feedbacks.push(newFeedback);
    return newFeedback;
  }

  static update(id, updatedData) {
    const feedback = feedbacks.find(feedback => feedback.id === id);
    Object.assign(feedback, updatedData);
    return feedback;
  }

  static delete(id) {
    const index = feedbacks.findIndex(feedback => feedback.id === id);
    if (index !== -1) {
      feedbacks.splice(index, 1);
    }
  }
}

module.exports = Feedback;
