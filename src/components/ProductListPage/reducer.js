import * as constants from './constants';

const defaultState = {
	productList: {
		fetching: null,
		error: null,
		data: null,
	},
};

const productListReducer = (state = defaultState, action) => {
	switch (action.type) {
		case constants.GET_PRODUCT_LIST_REQUEST:
			return {
				...state,
				productList: { fetching: true, error: null, data: null },
			};

		case constants.GET_PRODUCT_LIST_SUCCESS:
			return {
				...state,
				productList: { fetching: false, error: null, data: action.response },
			};

		case constants.GET_PRODUCT_LIST_ERROR:
			return {
				...state,
				productList: { fetching: false, error: action.response, data: null },
			};

		default:
			return state;
	}
};

export default productListReducer;
