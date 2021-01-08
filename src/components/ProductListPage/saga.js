import { takeEvery, put, all } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';

function* watchProductList() {
	yield takeEvery(constants.GET_PRODUCT_LIST_REQUEST, fetchProductList);
}

function* fetchProductList(action) {
	try {
		const result = yield fetch('http://temp.dash.zeta.in/food.php');
		const resData = yield result.json();
		yield put(actions.reciveProductList(resData));
	} catch (error) {
		yield put(actions.errorProductList(error));
	}
}

export default function* rootSaga() {
	yield all([watchProductList()]);
}
