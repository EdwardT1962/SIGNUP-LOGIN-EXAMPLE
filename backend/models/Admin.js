const admins = []; // Mock database

class Admin {
  constructor({ id, role }) {
    this.id = id;
    this.role = role;
  }

  static findAll() {
    return admins;
  }

  static findById(id) {
    return admins.find(admin => admin.id === id);
  }

  static create(data) {
    const newAdmin = new Admin(data);
    admins.push(newAdmin);
    return newAdmin;
  }

  static update(id, updatedData) {
    const admin = this.findById(id);
    if (!admin) return null;
    Object.assign(admin, updatedData);
    return admin;
  }

  static delete(id) {
    const index = admins.findIndex(admin => admin.id === id);
    if (index === -1) return false;
    admins.splice(index, 1);
    return true;
  }
}

module.exports = Admin;
