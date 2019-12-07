import axios from 'axios';
import { createCategories } from '../utils/helper';
import history from "../history";
import { 
  SET_CURRENT_PAGE, 
  GET_CREATORS,
  GET_USER_INFO,
  FILTER_WORKS,
  GET_WORK,
  SET_LOADING
} from "./types";

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const getCreators = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get('https://api.foriio.com/api/v1/promoted/users');
      dispatch({
        type: GET_CREATORS,
        creators: res.data.users,
        isLoading: false
      });
      dispatch(setCurrentPage(1));
    } catch (err) {
      console.log(err);
      history.push('/notfound')
    }
}

export const getUserInfo = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const profile = await axios.get(`https://api.foriio.com/api/v1/users/${user}/profile`);
    const works = await axios.get(`https://api.foriio.com/api/v1/users/${user}/works`);
    const categories = createCategories(works.data.works);
    dispatch({
      type: GET_USER_INFO,
      profile: profile.data.profile, 
      works: works.data.works,
      categories,
      isLoading: false
    });
  } catch (err) {
    console.log(err);
    history.push('/notfound')
  }
}

export const filterWorks = (category) => {
  return {
    type: FILTER_WORKS,
    category
  }
}

export const getWork = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
  const res = await axios.get(`https://api.foriio.com/api/v1/works/${id}`);
  dispatch({
    type: GET_WORK,
    work: res.data.work,
    isLoading: false
  })
  } catch (err) {
    console.log(err);
    history.push('/notfound')
  }
}

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    status
  }
}