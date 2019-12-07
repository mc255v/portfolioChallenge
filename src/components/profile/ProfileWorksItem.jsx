import React from 'react';
import { Link } from 'react-router-dom';

const ProfileWorksItem = ({ works }) => {
  return (
    <div className="works-list">
      {works.map(work => {
        return (
          <Link to={`/works/${work.id}`} key={work.id} className="works-list__item">
            <img 
              src={work.thumbnail} 
              alt="Creator's Work" 
              className="works-list__image"
            />
            <p className="">{work.title}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProfileWorksItem;