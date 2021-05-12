import axios from 'axios';
import {
    LOGIN_SELLER,
    REGISTER_SELLER,
    AUTH_SELLER,
    LOGOUT_SELLER
} from './types';

import { SELLER_SERVER } from '../components/Config.js';



export function registerSeller(dataToSubmit) {
    const request = axios.post(`${SELLER_SERVER}/sellerRegister`, dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_SELLER,
        payload: request
    }
}

export function loginSeller(dataToSubmit) {
    const request = axios.post(`${SELLER_SERVER}/sellerLogin`, dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_SELLER,
        payload: request
    }
}




export function authseller() {
    const request = axios.get(`${SELLER_SERVER}/authseller`)
        .then(response => response.data);

    return {
        type: AUTH_SELLER,
        payload: request
    }
}


export function logoutUser() {
    const request = axios.get(`${SELLER_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_SELLER,
        payload: request
    }
}






