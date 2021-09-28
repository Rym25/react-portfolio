import React from 'react';
import Nav from '../Nav';

const Header = (props) => {

  const {
    categories =[],
    setCurrentCategory,
    currentCategory
  } = props;
  return (
    <div className="App-header">
          <h1 className="display-3">Ryely Moore</h1>
          <Nav categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
    </div>
  );
};

export default Header;