import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../actions/actions';
import Loading from  '../abstracts/Loading';
import ProfileUser from './ProfileUser';
import ProfileWorks from './ProfileWorks';
import '../../sass/components/Profile.scss';
import '../../sass/abstracts/utilities.scss';

const Profile = (props) => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.userProfile);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(getUserInfo(props.match.params.id))
  }, []);

  if (isLoading) return <Loading />

  return (
    <div className="profile">
      <div className="profile__user">
        <ProfileUser profile={userProfile}/>
      </div>
      <div className="profile__works">
        <ProfileWorks />
      </div>
    </div>
  );
}

export default Profile;