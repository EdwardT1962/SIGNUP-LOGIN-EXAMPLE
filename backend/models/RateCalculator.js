const rateCalculations = []; // Mock database

class RateCalculator {
  constructor({id, distance, time, demandFactor}) {
    this.id = id;
    this.distance = distance;
    this.time = time;
    this.demandFactor = demandFactor;
  }

  static findAll() {
    return rateCalculations;
  }

  static findById(id) {
    return rateCalculations.find(rate => rate.id === id);
  }

  static create(data) {
    const newRate = new RateCalculator(data);
    rateCalculations.push(newRate);
    return newRate;
  }

  static update(id, updatedData) {
    const rate = rateCalculations.find(rate => rate.id === id);
    Object.assign(rate, updatedData);
    return rate;
  }

  static delete(id) {
    const index = rateCalculations.findIndex(rate => rate.id === id);
    if (index !== -1) {
      rateCalculations.splice(index, 1);
    }
  }
}

module.exports = RateCalculator;
