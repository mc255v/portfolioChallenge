import React from 'react';
import history from '../../history';
import "../../sass/components/Navbar.scss";
import "../../sass/components/buttons.scss";

const Navbar = () => {
  const goHome = () => {
    history.push('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="navbar__logo" onClick={() => goHome()}>foriio</div>
        <div className="navbar__search-select">
          <p>Creators</p>
        </div>
        <input type="search" className="navbar__search-input" placeholder="Let's discover great creatives"/>
        <button className="navbar__search-btn">Search</button>
      </div>
      <div className="navbar__right">
        <button className="button button--primary">Make yours for free</button>
        <button className="button">Log in</button>
        <button className="button">EN</button>
      </div>
    </nav>
  );
}

export default Navbar;