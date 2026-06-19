import React from 'react';
import { Header } from './components/Header';
import './index.scss';
import Info from './components/Info';
import Services from './components/Services';
import MapN from './components/Map';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import WhyWe from './components/WhyWe';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="main" className="main">
        <Info />
        <Services />
        <MapN />
        <WhyWe />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
