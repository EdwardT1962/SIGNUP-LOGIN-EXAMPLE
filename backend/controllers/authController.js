require('dotenv').config();
const pool = require('../dbConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const YOUR_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.register = async (req, res) => {
  const { email, password } = req.body;  // Destructure email and password

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
  const user = await pool.query(checkUserQuery, [email]);

  if (user.rows.length > 0) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createUserQuery = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
  const newUser = await pool.query(createUserQuery, [email, hashedPassword]);

  if (newUser.rows[0]) {
    const token = jwt.sign({ userId: newUser.rows[0].id }, YOUR_SECRET_KEY);
    return res.status(200).json({ token });
  } else {
    return res.status(400).json({ message: 'User could not be created' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;  // Destructure email and password

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
  const user = await pool.query(checkUserQuery, [email]);

  if (user.rows.length === 0 || !(await bcrypt.compare(password, user.rows[0].password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.rows[0].id }, YOUR_SECRET_KEY);
  return res.status(200).json({ token });
};
