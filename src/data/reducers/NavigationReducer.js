import { createNavigationReducer } from 'react-navigation-redux-helpers';
import Routes from '../../routes/Routes';

const navigationReducer = createNavigationReducer(Routes);
export default navigationReducer;