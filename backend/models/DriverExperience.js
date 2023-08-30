const driverExperiences = []; // Mock database

class DriverExperience {
  constructor(id, driverId, uberExperience, lyftExperience) {
    this.id = id;
    this.driverId = driverId;
    this.uberExperience = uberExperience;
    this.lyftExperience = lyftExperience;
  }

  static resetDatabase() {
    driverExperiences.length = 0;
  }

  static findAll() {
    return driverExperiences;
  }

  static findById(id) {
    return driverExperiences.find(experience => experience.id === id);
  }

  static create(data) {
    const newExperience = new DriverExperience(data.id, data.driverId, data.uberExperience, data.lyftExperience);
    driverExperiences.push(newExperience);
    return newExperience;
  }

  static update(id, updatedData) {
    const experience = this.findById(id);
    if (experience) {
      Object.assign(experience, updatedData);
      return experience;
    }
    return null;
  }

  static delete(id) {
    const index = driverExperiences.findIndex(experience => experience.id === id);
    if (index !== -1) {
      driverExperiences.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = DriverExperience;
