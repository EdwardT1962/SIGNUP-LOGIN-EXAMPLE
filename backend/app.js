const express = require('express');
const cors = require('cors');
const pool = require('./dbConfig');
const authRoutes = require('./routes/authRoutes');
const driverRoutes = require('./routes/driverRoutes');
const clientRoutes = require('./routes/clientRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentsToDriversRoutes = require('./routes/paymentsToDriversRoutes');
const paymentsToPlatformRoutes = require('./routes/paymentsToPlatformRoutes');
const packageOrdersRoutes = require('./routes/packageOrdersRoutes');
const backgroundChecksRoutes = require('./routes/backgroundChecksRoutes');
const driverExperienceRoutes = require('./routes/driverExperienceRoutes');
const historyRoutes = require('./routes/historyRoutes');
// New routes
const rateCalculatorRoutes = require('./routes/rateCalculatorRoutes');
const chatRoutes = require('./routes/chatRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const maintenanceAlertRoutes = require('./routes/maintenanceAlertRoutes');

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
app.use('/drivers', driverRoutes);
app.use('/clients', clientRoutes);
app.use('/admins', adminRoutes);
app.use('/paymentsToDrivers', paymentsToDriversRoutes);
app.use('/paymentsToPlatform', paymentsToPlatformRoutes);
app.use('/packageOrders', packageOrdersRoutes);
app.use('/backgroundChecks', backgroundChecksRoutes);
app.use('/driverExperience', driverExperienceRoutes);
app.use('/history', historyRoutes);
// New uses
app.use('/rateCalculator', rateCalculatorRoutes);
app.use('/chat', chatRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/maintenanceAlert', maintenanceAlertRoutes);

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
