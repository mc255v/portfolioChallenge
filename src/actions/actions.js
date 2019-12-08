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
const axiosConfig = axios.create({ baseURL: "https://api.foriio.com/api/v1" });

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}

export const getCreators = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const res = await axiosConfig.get('/promoted/users');
      dispatch({
        type: GET_CREATORS,
        creators: res.data.users,
        isLoading: false
      });
      dispatch(setCurrentPage(1));
    } catch (err) {
      history.push('/notfound')
    }
}

export const getUserInfo = (user) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await Promise.all([
      axiosConfig.get(`/users/${user}/profile`),
      axiosConfig.get(`/users/${user}/works`)
    ]);
    const profile = res[0].data.profile
    const works = res[1].data.works
    const categories = createCategories(works);
    dispatch({
      type: GET_USER_INFO,
      profile,
      works,
      categories,
      isLoading: false
    });
  } catch (err) {
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
  const res = await axiosConfig.get(`/works/${id}`);
  dispatch({
    type: GET_WORK,
    work: res.data.work,
    isLoading: false
  })
  } catch (err) {
    history.push('/notfound')
  }
}

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    status
  }
}