function hotel(state = {}, action){
    switch(action.type){
        case 'SET_HOTEL_LIST':
            return {...state, hotelsList: action.payload.hotelList};
        case 'REMOVE_HOTEL_LIST':
            return { ...state, hotelsList: undefined };
        default:
            return state; 
    }
}

export default hotel;