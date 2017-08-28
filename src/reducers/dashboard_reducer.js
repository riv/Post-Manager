import * as constants from '../actions/constants';

const _default = {
  pages: [],
  page: {},
  feed: []
};

const DashboardReducer = (state = _default, action) => {
  Object.freeze(state);
  const copy = Object.assign({}, state);
  switch(action.type) {
    case constants.RECEIVE_PAGES:
      copy.pages = action.pages;
      return copy;
    case constants.RECEIVE_PAGE:
      copy.page = action.page;
      return copy;
    case constants.RECEIVE_PAGE_FEED:
      copy.feed = action.feed;
      return copy;
    case constants.RECEIVE_UNPUBLISHED_POSTS:
      copy.unpublishedPosts = action.unpublishedPosts;
      return copy;
    default:
      return state;
  }
};

export default DashboardReducer;
