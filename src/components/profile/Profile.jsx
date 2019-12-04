import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../actions/actions';
import NotFound from '../notfound/NotFound';
import User from './User';
import Works from './Works';

const Profile = (props) => {
  const dispatch = useDispatch();
  const userError = useSelector(state => state.userError)
  const userWorks = useSelector(state => state.userWorks);
  const userProfile = useSelector(state => state.userProfile);

  useEffect(() => {
    dispatch(getUserInfo(props.match.params.id))
  }, []);

  if (userError) return <NotFound />

  return (
    <div className="profile__container">
      <div className="profile__user">
        {userProfile && <User profile={userProfile}/>}
      </div>
      <div className="profile__works">
        {userWorks && <Works />}
      </div>
    </div>
  );
}

export default Profile;