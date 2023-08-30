const maintenanceAlerts = []; // Mock database

class MaintenanceAlert {
  constructor(id, driverId, alertType, alertMessage) {
    this.id = id;
    this.driverId = driverId;
    this.alertType = alertType;
    this.alertMessage = alertMessage;
  }

  static findAll() {
    return maintenanceAlerts;
  }

  static findById(id) {
    return maintenanceAlerts.find(alert => alert.id === id);
  }

  static create(data) {
    const newAlert = new MaintenanceAlert(data.id, data.driverId, data.alertType, data.alertMessage);
    maintenanceAlerts.push(newAlert);
    return newAlert;
  }

  static delete(id) {
    const index = maintenanceAlerts.findIndex(alert => alert.id === id);
    if (index !== -1) {
      maintenanceAlerts.splice(index, 1);
    }
  }
}

module.exports = MaintenanceAlert;
