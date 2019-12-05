import React from 'react';
import Creator from '../creators/Creator';

const User = ({ profile }) => {

  return (
    <div>
      <img src={profile.avatar.thumb2x} alt="User Avatar"/>
      <div className="user__container">
        <h2 className="user__name">{profile.name}</h2>
        <p className="user__profession">{profile.profession}</p>
        <p className="user__location">{profile.location}</p>
        <p className="user__bio">{profile.bio}</p>
        <div className="user__external-container">
          {profile.website && <button className="user__external-btn">Website Icon</button>}
        </div>
        <button className="btn">Favorite</button>
        <button className="btn">Request</button>
      </div>
    </div>
  );
}

export default User;