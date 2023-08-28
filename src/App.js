import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; // Import UserProvider
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './Routes';
import './App.css';

function App() {
  return (
    <UserProvider> {/* Use UserProvider here */}
      <Router>
        <div className="App">
          <Header />
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
