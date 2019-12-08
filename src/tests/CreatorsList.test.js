import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CreatorsList from '../components/creators/CreatorsList';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

Enzyme.configure({ adapter: new Adapter() })

describe('CreatorsList', () => {
  let store;
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

  beforeEach(() => {
    store = mockStore(initialState)
  })

  it('should render self and subcomponents', () => {
    const enzymeWrapper = mount(
      <Provider store={store}>
        <CreatorsList />
      </Provider>
    );

    expect(enzymeWrapper.find('h1').hasClass('creator-list__title')).toBe(true)
  })
})