import { hotelsPaths } from '../Endpoints';
import axios from 'axios';

export default class HotelsApi{
    constructor(){}

    static getHotelsList = () => {
        return new Promise((resolve, reject) => {
            const HEADERS = {
                'Content-Type': 'application/json'
            };
            const CONFIG = {
                url: `${hotelsPaths.hotelsList}`,
                method: 'get',
                headers: HEADERS,
                timeout: 10000
            }
            axios(CONFIG)
            .then(response => resolve(response))
            .catch(error => reject(error));
        });
    };

    static getHotelInfo = (hotelId) => {
        return new Promise((resolve, reject) => {
            const HEADERS = {
                'Content-Type': 'application/json'
            };
            const CONFIG = {
                url: `${hotelsPaths.getHotel}/${hotelId}`,
                method: 'get',
                headers: HEADERS,
                timeout: 10000
            }
            axios(CONFIG)
            .then(response => resolve(response))
            .catch(error => reject(error));
        });
    };

};

