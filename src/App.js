import './App.css';
import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
