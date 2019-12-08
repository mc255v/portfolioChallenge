import reducer from '../reducers/rootReducer';
import * as types from '../actions/types';

describe('root reducer', () => {
  const initialState = {
    currentPage: 1,
    pageLimit: 10,
    creatorsFullList: [],
    paginationList: null,
    userProfile: null,
    userWorks: null,
    userWorksFiltered: null,
    categories: [],
    work: null,
    isLoading: true
  }

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SET_CURRENT_PAGE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_CURRENT_PAGE,
        page: 4
      })
    ).toEqual(
      {
        ...initialState,
        currentPage: 4,
        paginationList: []
      }
    )
  })
})