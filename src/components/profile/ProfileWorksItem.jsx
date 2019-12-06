import React from 'react';
import history from '../../history';

const ProfileWorksItem = ({ works }) => {
  const handleClick = (id) => {
    history.push(`/works/${id}`);
  }

  return (
    <div className="works-list">
      {works.map(work => {
        return (
          <div key={work.id} className="works-list__item">
            <img 
              src={work.thumbnail} 
              alt="Creator's Work" 
              className="works-list__image"
              onClick={() => handleClick(work.id)}
            />
            <p className="">{work.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileWorksItem;