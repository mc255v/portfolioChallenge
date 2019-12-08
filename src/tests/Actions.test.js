import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';
import * as actions from '../actions/actions';
import * as types from '../actions/types';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('should create an action to set the current page', () => {
    const page = 3
    const expectedAction = {
      type: types.SET_CURRENT_PAGE,
      page
    }
    expect(actions.setCurrentPage(page)).toEqual(expectedAction)
  });

  it('should create an action to filter by category', () => {
    const category = "Movie"
    const expectedAction = {
      type: types.FILTER_WORKS,
      category
    }
    expect(actions.filterWorks(category)).toEqual(expectedAction)
  });

  it('should create an action to set isLoading', () => {
    const status = false
    const expectedAction = {
      type: types.SET_LOADING,
      status
    }
    expect(actions.setLoading(status)).toEqual(expectedAction)
  });
});

describe('async actions', () => {
  let store = mockStore();

  beforeEach(() => {
    store = mockStore({})
  })

  afterEach(() => {
    mockAxios.get.mockReset();
  });

  it('creates GET_CREATORS when fetching has completed', async () => {
    const mockData = {
      'users': 123
    }

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData }),
    )
    
    const expectedActions = [
      { type: types.SET_LOADING, status: true },
      { type: types.GET_CREATORS, creators: mockData.users, isLoading: false },
      { type: types.SET_CURRENT_PAGE, page: 1}
    ]
  
    await store.dispatch(actions.getCreators())

    // expect(store.getActions()).toEqual(expectedActions)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  });

  it('creates GET_USER_INFO when fetching has completed', async () => {
    const mockData = {
      'profile': 123,
      'works': []
    }

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData }),
    )
    
    const expectedActions = [
      { type: types.SET_LOADING, status: true },
      { type: types.GET_USER_INFO,
        profile: mockData.profile,
        works: mockData.works,
        categories: ['All'],
        isLoading: false
      }
    ]
  
    await store.dispatch(actions.getUserInfo())

    expect(store.getActions()).toEqual(expectedActions)
    expect(mockAxios.get).toHaveBeenCalledTimes(2)
  });

  it('creates GET_WORK when fetching has completed', async () => {
    const mockData = { 'work': [] }

    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData }),
    )

    const expectedActions = [
      { type: types.SET_LOADING, status: true },
      { type: types.GET_WORK,
        work: mockData.work,
        isLoading: false
      }
    ]

    await store.dispatch(actions.getWork('id'))

    expect(store.getActions()).toEqual(expectedActions)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
  })

});