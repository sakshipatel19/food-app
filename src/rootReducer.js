import { combineReducers } from 'redux';

import productListReducer from '../src/components/ProductListPage/reducer';

const rootReducer = combineReducers({ productList: productListReducer });

export default rootReducer;
