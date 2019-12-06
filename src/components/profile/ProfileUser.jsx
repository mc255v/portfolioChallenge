import React from 'react';

const User = ({ profile }) => {

  return (
    <div className="user">
      <figure className="user__shape u-mt-small">
        <img src={profile.avatar.thumb2x} alt="User Avatar" className="user__shape-image"/>
        <figcaption className="user__shape-caption">{profile.user.screen_name}</figcaption>
      </figure>
      
      <div className="user__bottom">
        <h2 className="user__name u-mb-small">{profile.name}</h2>
        <div className="user__wrapper u-mb-small">
          <p className="user__profession">{profile.profession}</p>
          <p className="user__location">{profile.location}</p>
          {profile.website && <div className="user__external-btn">Website Icon</div>}
        </div>
        <p className="user__bio u-mb-small">{profile.bio}</p>
        <button className="button">Favorite</button>
        <button className="button button--primary">Request</button>
      </div>
    </div>
  );
}

export default User;