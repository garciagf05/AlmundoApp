function hotel(state = {}, action){
    switch(action.type){
        case 'SET_HOTELS_LIST':
            return {...state, hotelsList: action.payload.hotelsList};
        case 'REMOVE_HOTELS_LIST':
            return { ...state, hotelsList: undefined };
        default:
            return state; 
    }
}

export default hotel;