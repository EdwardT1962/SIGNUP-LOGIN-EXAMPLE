import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import '../components/HomePage.css'; // Importing the CSS from the components folder
import './HomePage.css'; // Importing the CSS from the pages folder



function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <Packages />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
