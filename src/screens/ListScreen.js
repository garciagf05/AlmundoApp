import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl,
  Alert
} from 'react-native';
import HotelsApi from '../services/api/HotelsApi'
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import HotelCard from '../components/HotelCard';
import listStyles from './styles/ListStyles';
import { connect } from 'react-redux';

class ListScreen extends Component {

  static navigationOptions = {
    headerTitle: 'HOTELES',
    headerLeft: undefined
  }

  constructor(props){
    super(props);
    this.state = {
      hotelsList: [],
      auxList: [],
      refreshing: false
    }
  }

  componentDidMount = async() => {
    this._getHotelsList()
  };

  _getHotelsList = () => {
    HotelsApi.getHotelsList()
    .then((response) => {
      if (response.status === 200){
        this.setState({
          hotelsList: response.data.hotels,
          auxList: response.data.hotels,
          refreshing: false
        });
      }
    })
    .catch((error) => { 
      this.setState({ refreshing: false });
      this._showDataErrorAlert();
    })
  };

  _findHotels = (text) => {
    let resultList = [];
    if (text === ''){
      this.setState({ hotelsList: this.state.auxList })
    } else {
      resultList = this.state.auxList.filter(x => x.name.toLowerCase().search(text.toLowerCase()) > -1) || []; 
      this.setState({ hotelsList:  resultList});
    }
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this._getHotelsList();
  };

  _showDataErrorAlert = () => {
    Alert.alert(
      'Error',
      'No se pudo obtener la información de los hoteles, verifique su conexión a internet.',
      [
        { text: 'Entendido', onPress: () =>  console.log('OK Pressed') }
      ]
      
    );
  }

  render = () => {
    return (
      <SafeAreaView style={listStyles.screenContainer}>
        <SearchBar searchFunction={this._findHotels.bind(this)}/>
        {
          this.state.auxList.length <= 0 ?
            <Loading />
          : // When list is filled
            <FlatList style={listStyles.flatListContainer}
                      data={this.state.hotelsList}
                      renderItem={( { item } ) => <HotelCard data={item}/>}
                      keyExtractor={item => item._id}
                      refreshControl={
                        <RefreshControl refreshing={this.state.refreshing}
                                        onRefresh={this.onRefresh}
                        />
                      }/>
        }
      </SafeAreaView>
    );
  };
}


export default connect(null)(ListScreen)
