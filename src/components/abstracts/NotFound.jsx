import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/pages/NotFound.scss';
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="face">
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </div>

      <div className="not-found__bottom">
        <h1 className="not-found__oops">Oops! Something went wrong!</h1>
        <Link to="/" className="button button--primary">Return to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;