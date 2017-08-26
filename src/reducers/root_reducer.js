import { combineReducers } from 'redux';

import LoginReducer from './login_reducer';

const rootReducer = combineReducers({
  example: LoginReducer
});

export default rootReducer;
