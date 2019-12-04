import { SET_CURRENT_PAGE } from "./actionTypes";

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page
  }
}