import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation }  from 'react-navigation';
import { Colors, Metrics } from '../themes'
import backButtonStyles from './styles/BackButtonStyles';

class BackButton extends React.Component {

  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <TouchableOpacity style={backButtonStyles.container}
                        activeOpacity={0.6}
                        onPress={()=>this.props.navigation.goBack()}>
        <Icon
          name={'arrow-back'}
          size={Metrics.backButton}
          color={Colors.whiteFont}
        />
      </TouchableOpacity>
    );
  };
}

export default withNavigation(BackButton);
