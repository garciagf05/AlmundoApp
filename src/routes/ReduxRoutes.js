// Libraries imports
import Routes from './Routes';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

// Redux container creation with router navigator
const RoutesWithState = createReduxContainer(Routes, 'root');

// Get navigation from reducers
const mapStateToProps = state => ({
    state: state.navigation
})

export default connect(mapStateToProps)(RoutesWithState);