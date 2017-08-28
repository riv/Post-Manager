import { combineReducers } from 'redux';

import LoginReducer from './login_reducer';
import DashboardReducer from './dashboard_reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  dashboard: DashboardReducer
});

export default rootReducer;
