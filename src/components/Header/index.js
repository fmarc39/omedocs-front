import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// image
import logo from 'src/assets/img/logo.svg';

const Header = () => (
  <header className="header">
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="logo">
        <img className="logo__img" src={logo} alt="logo" />
        <div className="logo__name">O'Médocs</div>
      </div>
    </Link>
  </header>
);

export default Header;
