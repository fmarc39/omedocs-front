import React from 'react';
import './styles.scss';
// image
import logo from 'src/assets/img/logo.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img className="logo__img" src={logo} alt="logo" />
      <div className="logo__name">O'Médocs</div>
    </div>
  </header>
);

export default Header;
