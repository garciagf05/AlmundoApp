import { combineReducers } from 'redux';

import navigation from './reducers/NavigationReducer';

const rootReducer = combineReducers({
  navigation
});

export default rootReducer;