const bcrypt = require('bcrypt');

async function hashPassword() {
  try {
    const plainTextPassword = "YourNewPasswordHere"; // Replace with your new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    console.log("Hashed password:", hashedPassword);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

hashPassword();
