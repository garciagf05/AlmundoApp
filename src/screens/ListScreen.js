import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
  RefreshControl
} from 'react-native';
import StoragePermission from '../services/permissions/StoragePersmission';
import HotelsApi from '../services/api/HotelsApi'
import SearchBar from '../components/SearchBar';
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
    this.storagePermission = new StoragePermission();
    this.state = {
      hotelsList: [],
      auxList: []
    }
  }

  componentDidMount = async() => {
    if (!this.props.hotels){
      this._getHotelsList()
    } else {
      this.setState({
        hotelsList: this.props.hotels,
        auxLits: this.props.hotels
      })
    }
  };

  _getHotelsList = async () => {
    await HotelsApi.getHotelsList()
    .then((response) => {
      if (response.status === 200){
        this.setState({
          hotelsList: response.data.hotels,
          auxList: response.data.hotels
        });
        this._verifyStoragePermission();
      }
    })
    .catch((error) => {console.log(error)})
  };

  _verifyStoragePermission = async() => {
    await this.storagePermission.handleStoragePermission()
    .then((granted) => {
      console.log(granted);
      this._dispatchList();
    })
    .catch((error) => {
      console.log(error);
    });
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

  _dispatchList = () => {
    this.props.dispatch({
      type: 'SET_HOTEL_LIST',
      payload: { hotelsList: this.state.hotelsList }
    });
  };

  render = () => {
    return (
      <SafeAreaView style={listStyles.screenContainer}>
        <SearchBar searchFunction={this._findHotels.bind(this)}/>
        <FlatList style={listStyles.flatListContainer}
                  data={this.state.hotelsList}
                  renderItem={( { item } ) => <HotelCard data={item}/>}
                  keyExtractor={item => item._id}/>
      </SafeAreaView>
    );
  };
}

function mapStateToProps(state){
  return {
    hotels: state.hotel.hotelsList
  }
}

export default connect(mapStateToProps)(ListScreen)
