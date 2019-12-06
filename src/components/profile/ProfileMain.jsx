import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../actions/actions';
import User from './ProfileUser';
import ProfileWorks from './ProfileWorks';
import '../../sass/components/Profile.scss';
import '../../sass/abstracts/utilities.scss';

const Profile = (props) => {
  const dispatch = useDispatch();
  const userWorks = useSelector(state => state.userWorks);
  const userProfile = useSelector(state => state.userProfile);

  useEffect(() => {
    dispatch(getUserInfo(props.match.params.id))
  }, []);

  return (
    <div className="profile">
      <div className="profile__user">
        {userProfile && <User profile={userProfile}/>}
      </div>
      <div className="profile__works">
        {userWorks && <ProfileWorks />}
      </div>
    </div>
  );
}

export default Profile;