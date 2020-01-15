import React from 'react';
import {
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigation }  from 'react-navigation';
import searchBarStyles from './styles/SearchBarStyles';
import { Colors, Metrics } from '../themes';

class SearchBar extends React.Component {

  constructor(props){
    super(props);
  }

  render = () => {
    return (
      <View style={searchBarStyles.container}>
        <TextInput style={searchBarStyles.textInput}
            autoCapitalize={'words'}
            keyboardType={'default'}
            onChangeText={(text) => this.props.searchFunction(text)}/>
        <Icon
          name={'search'}
          size={Metrics.backButton}
          color={Colors.primary}
        />
      </View>
    );
  };
}

export default withNavigation(SearchBar);
