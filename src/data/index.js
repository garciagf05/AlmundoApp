import { combineReducers } from 'redux';

import hotel from './reducers/HotelsReducer';
import navigation from './reducers/NavigationReducer';

const rootReducer = combineReducers({
  navigation,
  hotel
});

export default rootReducer;