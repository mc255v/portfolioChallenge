import { 
  SET_CURRENT_PAGE, 
  GET_CREATORS,
  GET_USER_INFO,
  USER_ERROR
} from "../actions/types";

const initialState = {
  currentPage: 1,
  pageLimit: 10,
  creatorsFullList: [],
  paginationList: [],
  userProfile: null,
  userWorks: null,
  userError: false
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      const offset = (action.page - 1) * state.pageLimit;
      const list = state.creatorsFullList.slice(offset, offset + state.pageLimit);
      return {
        ...state,
        currentPage: action.page,
        paginationList: list
      }
    case GET_CREATORS:
      return {
        ...state,
        creatorsFullList: action.creators
      }
    case GET_USER_INFO:
      return {
        ...state,
        userProfile: action.profile,
        userWorks: action.works
      }
    case USER_ERROR:
      return {
        ...state,
        userError: true
      }
    default:
      return state
  }
}

export default rootReducer;