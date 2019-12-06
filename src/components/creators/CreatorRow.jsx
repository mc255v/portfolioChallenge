import React from 'react';

const Creator = ({ creator }) => {
  const defaultAvatar = "https://dyci7co52mbcc.cloudfront.net/static/images/default_avatar_v2.png";

  return (
    <div className="creator__container">
      <div className="creator__profile">
        <img src={creator.avatar || defaultAvatar} alt="avatar" className="creator__image"/>
        <div className="creator_role-container">
          <p className="creator__profession">{creator.profession}</p>
          <p className="creator__name">{creator.name}</p>
        </div>
      </div>

      <div className="creator__works">
        {creator.works.map(work => {
          return (
            <img key={work.id} src={work.thumbnail} alt={work.title}/>
          );
        })}
      </div>
    </div>
  );
}

export default Creator;