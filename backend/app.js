const express = require('express');
const cors = require('cors');
const pool = require('./dbConfig');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);

app.get('/api/clientData', (req, res) => {
  const mockData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    packages: ['Package 1', 'Package 2'],
  };
  res.json(mockData);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 3002;

app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err}`);
  } else {
    console.log(`Server running on port ${port}`);
  }
});
