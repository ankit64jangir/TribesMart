import { combineReducers } from 'redux';
import user from './user_reducer';
import seller from './seller_reducer';

const rootReducer = combineReducers({
    user,
    seller,
});

export default rootReducer;