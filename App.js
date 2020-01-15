import React, { Component } from 'react';
import {
  YellowBox
} from 'react-native';
import { store, persistor } from './src/data/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReduxRouter from './src/routes/ReduxRoutes';

export default class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    console.disableYellowBox = true;
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', 'Require cycle:', 'Warning:'];
    YellowBox.ignoreWarnings(['Require cycle:']);
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReduxRouter/>
        </PersistGate>
      </Provider> 
    );
  }
  
};
