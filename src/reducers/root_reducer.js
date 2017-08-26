import { combineReducers } from 'redux';

import ExampleReducer from './example_reducer';

const rootReducer = combineReducers({
  example: ExampleReducer
});

export default rootReducer;
