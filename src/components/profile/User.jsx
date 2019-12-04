import React from 'react';

const User = ({ profile }) => {

  return (
    <div>
      <img src={profile.avatar.thumb2x} alt="User Image"/>
    </div>
  );
}

export default User;