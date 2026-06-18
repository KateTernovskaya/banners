import React from 'react';
import { Header } from './components/Header';
import './index.scss';
import Info from './components/Info';
import Services from './components/Services';
import MapN from './components/Map';
import Cost from './components/Cost';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div id="main" className="main">
        <Info />
        <Services />
        <MapN />
        <Cost />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
