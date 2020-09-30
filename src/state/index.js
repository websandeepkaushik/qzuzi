import { combineReducers } from 'redux';
import productListReducer from './ProductList';

const rootReducer = combineReducers({
    productListReducer,
})
export default rootReducer
