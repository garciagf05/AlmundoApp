import React from 'react';
import {
  View,
  ActivityIndicator,
  Text
} from 'react-native';
import { withNavigation }  from 'react-navigation';
import { Colors } from '../themes'
import loadingStyles from './styles/LoadingStyles';

class Loading extends React.Component {

  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <View style={loadingStyles.loadingContainer}>
        <ActivityIndicator size={"large"}
                            color={Colors.primary}/>
        <Text style={loadingStyles.loadingLabel}>{'Cargando Información'}</Text>
      </View>
    );
  };
}

export default withNavigation(Loading);
