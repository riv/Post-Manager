import * as constants from './constants';

export const receiveLoginStatus = status => ({
  type: constants.RECEIVE_LOGIN_STATUS,
  status
});

export const logout = () => ({
  type: constants.LOGOUT,
  data: null
});

export const getLoginStatus = () => dispatch => {
  window.FB.getLoginStatus(response => {
    dispatch(receiveLoginStatus(response));
  })
};
