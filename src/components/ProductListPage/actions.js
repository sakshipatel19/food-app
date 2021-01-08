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

//SET PRODUCT ACTION
export const setProductDetail = (product) => ({
	type: constants.SET_PRODUCT_DETAILS,
	product,
});

export const setCartItems = (response) => ({
	type: constants.SET_CART_ITEMS,
	response,
});
