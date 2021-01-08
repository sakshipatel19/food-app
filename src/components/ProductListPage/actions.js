import * as constants from './constants';

// product list actions

// product list request actions

export const requestProductList = () => {
	return {
		type: constants.GET_PRODUCT_LIST_REQUEST,
	};
};

// product list success action
export const reciveProductList = (response) => ({
	type: constants.GET_PRODUCT_LIST_SUCCESS,
	response,
});
// product list error action
export const errorProductList = (response) => ({
	type: constants.GET_PRODUCT_LIST_ERROR,
	response,
});

export const setProductDetail = (product) => ({
	type: constants.SET_PRODUCT_DETAILS,
	product,
});
