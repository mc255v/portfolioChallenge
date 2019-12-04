import { SET_CURRENT_PAGE } from "../actions/actionTypes";

const initialState = {
  currentPage: 1,
  pageLimit: 10,
  userRecords: []
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      }
    default:
      return state
  }
}

export default rootReducer;