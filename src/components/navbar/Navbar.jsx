import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "../../sass/pages/Navbar.scss";
import "../../sass/components/buttons.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">foriio</Link>
        <div className="navbar__search">
          <div className="navbar__search-select">
            <p>Creators</p>
          </div>
          <input type="search" className="navbar__search-input" placeholder="Let's discover great creatives"/>
          <button className="navbar__search-btn">Search</button>
          <button className="navbar__search-mobile"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </div>
      <div className="navbar__right">
        <button className="button button--primary navbar__button">Make yours for free</button>
        <button className="button">Log in</button>
        <button className="button">EN</button>
      </div>
    </nav>
  );
}

export default Navbar;