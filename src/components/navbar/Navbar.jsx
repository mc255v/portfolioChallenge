import React from 'react';
import "../../sass/components/Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo">foriio</div>
        <div className="navbar__search-select">
          <p>Creators</p>
        </div>
        <input type="search" className="navbar__search-input" placeholder="Let's discover great creatives"/>
        <button className="navbar__search-btn">Search</button>
      </div>
      <div className="navbar__right">
        <button className="navbar__btn navbar__btn--primary">Make yours for free</button>
        <button className="navbar__btn">Log in</button>
        <button className="navbar__btn">EN</button>
      </div>
    </nav>
  );
}

export default Navbar;