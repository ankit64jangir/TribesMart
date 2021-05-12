import {
    LOGIN_SELLER,
    REGISTER_SELLER,
    AUTH_SELLER,
    LOGOUT_SELLER,
} from '../_actions/types';


export default function (state = {}, action) {
    switch (action.type) {
        case REGISTER_SELLER:
            return { ...state, registerseller: action.payload }
        case LOGIN_SELLER:
            return { ...state, loginSuccesSeller: action.payload }
        case AUTH_SELLER:
             return { ...state, sellerData: action.payload }
        case LOGOUT_SELLER:
            return { ...state }

        default:
            return state;
    }
}