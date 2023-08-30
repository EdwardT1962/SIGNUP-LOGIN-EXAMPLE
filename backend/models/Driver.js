const drivers = []; // Mock database

class Driver {
  constructor({ id, vehicleInfo, licenseNumber, earnings, walletBalance, insuranceDetails, accountStatus, otherParameters }) {
    this.id = id;
    this.vehicleInfo = vehicleInfo;
    this.licenseNumber = licenseNumber;
    this.earnings = earnings;
    this.walletBalance = walletBalance;
    this.insuranceDetails = insuranceDetails;
    this.accountStatus = accountStatus;
    this.otherParameters = otherParameters;
  }

  static findAll() {
    return drivers;
  }

  static findById(id) {
    return drivers.find(driver => driver.id === id);
  }

  static create(data) {
    const newDriver = new Driver(data);
    drivers.push(newDriver);
    return newDriver;
  }

  static update(id, updatedData) {
    const driver = drivers.find(driver => driver.id === id);
    Object.assign(driver, updatedData);
    return driver;
  }

  static delete(id) {
    const index = drivers.findIndex(driver => driver.id === id);
    if (index !== -1) {
      drivers.splice(index, 1);
    }
  }
}

module.exports = Driver;
