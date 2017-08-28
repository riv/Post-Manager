import * as constants from './constants';

export const receivePages = pages => ({
  type: constants.RECEIVE_PAGES,
  pages
});

export const receivePage = page => ({
  type: constants.RECEIVE_PAGE,
  page
});

export const receivePageFeed = feed => ({
  type: constants.RECEIVE_PAGE_FEED,
  feed
});

export const receiveUnpublishedPosts = unpublishedPosts => ({
  type: constants.RECEIVE_UNPUBLISHED_POSTS,
  unpublishedPosts
});

//Fetches all pages the current user manages, fetches the page and feed info
//to populate default data
export const getPages = (accessToken) => dispatch => {
  const params = {
    access_token: accessToken
  };
  window.FB.api('/me/accounts', 'get', params, response => {
    dispatch(receivePages(response.data));
    if (response.data.length > 0) {
      const {id, access_token} = response.data[0]
      getPage(id, access_token)(dispatch);
      getPageFeed(id, access_token)(dispatch);
      getUnpublishedPosts(id, access_token)(dispatch);
    };
  });
};

export const getPage = (id, access_token) => dispatch => {
  const params = {
    fieldname: 'id,name',
    access_token
  };
  window.FB.api(`/${id}`, 'get', params, (response) => {
    dispatch(receivePage(response));
  });
}

export const getPageFeed = (id, access_token) => dispatch => {
  const params = {
    access_token,
    fields: 'comments.limit(1),insights{post_impressions_unique},likes.limit(1).summary(true)'
  };
  window.FB.api(`/${id}/posts`, 'get', params, (response) => {
    dispatch(receivePageFeed(response.data));
  });
}

export const getUnpublishedPosts = (id, access_token) => dispatch => {
  const params = {
    access_token,
    is_published: false,
    fields: 'message,created_time,likes.limit(1).summary(true)'
  };
  window.FB.api(`/${id}/promotable_posts`, 'get', params, (response) => {
    dispatch(receiveUnpublishedPosts(response.data));
  });
}
