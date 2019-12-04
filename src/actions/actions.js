import axios from 'axios';
import { 
  SET_CURRENT_PAGE, 
  GET_CREATORS,
  GET_USER_INFO,
  USER_ERROR
} from "./types";

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const getCreators = () => async (dispatch) => {
    try {
      const res = await axios.get('https://api.foriio.com/api/v1/promoted/users');
      dispatch({
        type: GET_CREATORS,
        creators: res.data.users
      });
      dispatch(setCurrentPage(1));
    } catch (err) {
      console.log(err);
    }
}

export const getUserInfo = (user) => async (dispatch) => {
  try {
    const profile = await axios.get(`https://api.foriio.com/api/v1/users/${user}/profile`);
    const works = await axios.get(`https://api.foriio.com/api/v1/users/${user}/works`);
    dispatch({
      type: GET_USER_INFO,
      profile: profile.data.profile, 
      works: works.data.works
    });
  } catch (err) {
    dispatch(userError())
  }
}

export const userError = () => {
  return {
    type: USER_ERROR
  }
}