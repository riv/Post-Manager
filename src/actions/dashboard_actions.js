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
    fields: 'id,name,access_token',
    access_token
  };
  window.FB.api(`/${id}`, 'get', params, (response) => {
    dispatch(receivePage(response));
  });
}

export const getPageFeed = (id, access_token) => dispatch => {
  const params = {
    access_token,
    fields: 'comments.limit(1),insights{post_impressions_unique},object_id,message,created_time,updated_time,likes.limit(1).summary(true)'
  };
  window.FB.api(`/${id}/posts`, 'get', params, (response) => {
    //for each of the posts that we get back, if it has object id,
    //make call to /object_id/picture
    //on the callback, set post.url to the url
    // response.data.forEach(post => {
    //   if (post.object_id){
    //     post.photo_url = getPhotoUrl(id, access_token, post.object_id);
    //   };
    // });
    dispatch(receivePageFeed(response.data));
  });
}

// export const getPhotoUrl = (id, access_token, object_id) => {
//   const params = {
//     access_token
//   }
//   window.FB.api(`/${object_id}/picture`, 'get', params, (response) => {
//     console.log(response);
//     return response.data.url;
//   });
// }

export const getUnpublishedPosts = (id, access_token) => dispatch => {
  const params = {
    access_token,
    is_published: false,
    fields: 'message,created_time,likes.limit(1).summary(true),scheduled_publish_time'
  };
  window.FB.api(`/${id}/promotable_posts`, 'get', params, (response) => {
    dispatch(receiveUnpublishedPosts(response.data));
  });
}

export const createPost = (message, page) => dispatch => {
  const params = {
    message,
    access_token: page.access_token
  };
  window.FB.api(`/${page.id}/feed`, 'POST', params, (response) => {
    dispatch(getPageFeed(page.id, page.access_token));
  })
}

export const createScheduledPost = (message, datetime, page) => dispatch => {
  const params = {
    message,
    published: false,
    scheduled_publish_time: (datetime.getTime() / 1000),
    access_token: page.access_token
  };
  window.FB.api(`/${page.id}/feed`, 'POST', params, (response) => {
    console.log(response);
    dispatch(getUnpublishedPosts(page.id, page.access_token));
  });
}
