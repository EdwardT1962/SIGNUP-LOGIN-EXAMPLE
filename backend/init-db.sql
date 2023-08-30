-- Drop existing tables if they exist
DROP TABLE IF EXISTS History, DriverExperience, BackgroundChecks, PackageOrders, PaymentsToPlatform, PaymentsToDrivers, Admin, Clients, Drivers;

-- Create Drivers Table
CREATE TABLE Drivers (
  id SERIAL PRIMARY KEY,
  vehicle_info JSON,
  license_number VARCHAR(50),
  earnings NUMERIC(10, 2),
  wallet_balance NUMERIC(10, 2),
  insurance_details JSON,
  account_status VARCHAR(50),
  other_parameters JSON
);

-- Create Clients Table
CREATE TABLE Clients (
  id SERIAL PRIMARY KEY,
  preferred_driver_id INT REFERENCES Drivers(id),
  payment_method VARCHAR(50),
  account_balance NUMERIC(10, 2),
  account_status VARCHAR(50),
  personal_info JSON
);

-- Create Admin Table
CREATE TABLE Admin (
  id SERIAL PRIMARY KEY,
  role VARCHAR(50)
);

-- Create PaymentsToDrivers Table
CREATE TABLE PaymentsToDrivers (
  id SERIAL PRIMARY KEY,
  driver_id INT REFERENCES Drivers(id),
  amount NUMERIC(10, 2),
  date DATE,
  status VARCHAR(50)
);

-- Create PaymentsToPlatform Table
CREATE TABLE PaymentsToPlatform (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES Clients(id),
  amount NUMERIC(10, 2),
  date DATE,
  status VARCHAR(50)
);

-- Create PackageOrders Table
CREATE TABLE PackageOrders (
  id SERIAL PRIMARY KEY,
  client_id INT REFERENCES Clients(id),
  driver_id INT REFERENCES Drivers(id),
  status VARCHAR(50),
  first_accepted_by INT REFERENCES Drivers(id),
  chosen_driver_id INT REFERENCES Drivers(id)
);

-- Create BackgroundChecks Table
CREATE TABLE BackgroundChecks (
  id SERIAL PRIMARY KEY,
  driver_id INT REFERENCES Drivers(id),
  status VARCHAR(50),
  details TEXT
);

-- Create DriverExperience Table
CREATE TABLE DriverExperience (
  id SERIAL PRIMARY KEY,
  driver_id INT REFERENCES Drivers(id),
  uber_experience JSON,
  lyft_experience JSON
);

-- Create History Table
CREATE TABLE History (
  id SERIAL PRIMARY KEY,
  action VARCHAR(50),
  timestamp TIMESTAMP
);
