import './App.css';
import React, { useState } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './component/About';



function App() {

  const categories = [
    {name: "About Me"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"}
 ]

 const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Header categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <main>
      {currentCategory === 'About Me' && <About/>}  
      {currentCategory === 'Portfolio' && <h1>Portfolio</h1>}  
      {currentCategory === 'Contact' && <h1>Contact</h1>}  
      {currentCategory === 'Resume' && <h1>Resume</h1>}  
      
      </main>
      <Footer />
    </div>
  );
}

export default App;
