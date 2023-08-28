import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import CheckRatesPage from './pages/CheckRatesPage';
import ClientDashboard from './pages/ClientDashboard';
import DriverDashboard from './pages/DriverDashboard';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';

function AppRoutes() { // Keep this name consistent with the export
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/check-rates" element={<CheckRatesPage />} />
      <Route path="/client-dashboard" element={<ClientDashboard />} />
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/login" element={<LoginPage />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default AppRoutes; // Keep this name consistent with the function
