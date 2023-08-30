class BackgroundChecks {
    static checks = []; // Mock database
  
    static resetDatabase() {
      this.checks.length = 0;
    }
  
    static create(data) {
      this.checks.push(data);
      return data;
    }
  
    static findAll() {
      return this.checks;
    }
  
    static findById(id) {
      return this.checks.find(check => check.id === id);
    }
  
    static update(id, updatedData) {
      const check = this.findById(id);
      if (check) {
        Object.assign(check, updatedData);
        return check;
      }
      return null;
    }
  
    static delete(id) {
      const index = this.checks.findIndex(check => check.id === id);
      if (index !== -1) {
        this.checks.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = BackgroundChecks;
  