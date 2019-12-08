import React from 'react';
import { defaultAvatar } from '../../utils/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGlobe, 
  faMapMarkerAlt, 
  faUserCircle, 
  faStar,
  faEnvelopeOpenText 
} from '@fortawesome/free-solid-svg-icons'

const User = ({ profile }) => {

  return (
    <div className="user">
      <figure className="user__shape u-mt-small">
        <img src={profile.avatar.thumb2x || defaultAvatar} alt="User Avatar" className="user__shape-image"/>
        <figcaption className="user__shape-caption">{profile.user.screen_name}</figcaption>
      </figure>
      
      <div className="user__bottom">
        <h2 className="user__name u-mb-small">{profile.name}</h2>
        <div className="user__wrapper u-mb-small">
          <p className="user__profession"><FontAwesomeIcon icon={faUserCircle} /> {profile.profession}</p>
          <p className="user__location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {profile.location}</p>
          {profile.website && <div className="user__external-btn"><FontAwesomeIcon icon={faGlobe} /></div>}
        </div>
        <p className="user__bio u-mb-small">{profile.bio}</p>
        <button className="button"><FontAwesomeIcon icon={faStar} /> Favorite</button>
        {profile.contact_email && <button className="button button--primary">
          <FontAwesomeIcon icon={faEnvelopeOpenText} /> Request
        </button>}
      </div>
    </div>
  );
}

export default User;