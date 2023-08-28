import React, { useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import './ClientDashboard.css';

function ClientDashboard() {
  const { setClientData } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    axios.get('http://localhost:3002/api/clientData', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      setClientData(response.data);
    })
    .catch(error => {
      console.error("Error fetching client data:", error);
    });
  }, [setClientData]);

  return (
    <div className="client-dashboard">
      <h1>Client Dashboard</h1>
      <div className="package-selection">
        {/* Package Selection and Customization */}
      </div>
      <div className="booking-history">
        {/* Booking History */}
      </div>
      <div className="favorite-drivers">
        {/* Favorite Drivers */}
      </div>
      <div className="payment-management">
        {/* Payment Management */}
      </div>
      <div className="profile-settings">
        {/* Profile Settings */}
      </div>
      <div className="cancellation-interface">
        {/* Cancellation Interface for Rider */}
      </div>
    </div>
  );
}

export default ClientDashboard;
