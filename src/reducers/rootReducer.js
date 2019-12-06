import { 
  SET_CURRENT_PAGE, 
  GET_CREATORS,
  GET_USER_INFO,
  GET_WORK,
  FILTER_WORKS
} from "../actions/types";

const initialState = {
  currentPage: 1,
  pageLimit: 10,
  creatorsFullList: [],
  paginationList: [],
  userProfile: null,
  userWorks: null,
  userWorksFiltered: null,
  categories: [],
  work: null
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
        userWorks: action.works,
        categories: action.categories
      }
    case FILTER_WORKS:
      const filtered = state.userWorks.filter(work => {
        return work.category_list.includes(action.category)
      });
      return {
        ...state,
        userWorksFiltered: filtered
      }
    case GET_WORK:
      return {
        ...state,
        work: action.work
      }
    default:
      return state
  }
}

export default rootReducer;