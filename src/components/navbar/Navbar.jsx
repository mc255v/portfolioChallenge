import React from 'react';
import "../../sass/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar_logo">foriio</div>
        <div className="navbar__search-select">Creator</div>
        <input type="search" className="navbar__search-input" />
        <button className="btn navbar__search-btn">Search</button>
      </div>
      <div className="navbar__right">
        <button className="btn">Make yours free</button>
        <button className="btn">Log in</button>
        <button className="btn">EN</button>
      </div>
    </nav>
  );
}

export default Navbar;