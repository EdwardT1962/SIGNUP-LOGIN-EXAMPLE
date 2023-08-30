const Admin = require('./Admin');  // Update the path to your Admin.js

test('should create a new admin', () => {
  const newAdmin = {
    id: 1,
    role: 'superadmin'
  };

  const createdAdmin = Admin.create(newAdmin);
  expect(createdAdmin.id).toEqual(newAdmin.id);
});

test('should find all admins', () => {
  Admin.create({ id: 2, role: 'admin' });  // Create another admin
  const allAdmins = Admin.findAll();
  expect(allAdmins.length).toEqual(2);
});

test('should find admin by ID', () => {
  const admin = Admin.findById(1);
  expect(admin.id).toEqual(1);
});

test('should update an admin', () => {
  const updatedData = { role: 'admin' };
  const updatedAdmin = Admin.update(1, updatedData);
  expect(updatedAdmin.role).toEqual('admin');
});

test('should delete an admin', () => {
  const isDeleted = Admin.delete(1);
  expect(isDeleted).toBe(true);

  const admin = Admin.findById(1);
  expect(admin).toBeUndefined();
});
