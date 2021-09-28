import './App.css';
import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact'
import Portfolio from './component/Portfolio';



function App() {

  const categories = [
    {name: "About Me"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"}
 ]

 const [currentCategory, setCurrentCategory] = useState("About Me");

  return (
    <div className="App">
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <main>
      {currentCategory === 'About Me' && <About/>}  
      {currentCategory === 'Portfolio' && <Portfolio></Portfolio>}  
      {currentCategory === 'Contact' && <Contact />}  
      {currentCategory === 'Resume' && <h1>Resume</h1>}  
      </main>
      <Footer />
    </div>
  );
}

export default App;
