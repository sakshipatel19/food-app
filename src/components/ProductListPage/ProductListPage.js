import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Categories from '../Category';
import FavouriteItems from '../Favourite';

class ProductListPage extends Component {
	componentDidMount() {
		this.props.requestProductList();
		let cartItems = JSON.parse(localStorage.getItem('cartItems'));
		if (cartItems)
			this.props.setCartItems(JSON.parse(localStorage.getItem('cartItems')));
	}

	render() {
		const { productList } = this.props;
		return (
			<div className='product-listpage-container'>
				<FavouriteItems productList={productList} {...this.props} />
				<Categories productList={productList} {...this.props} />
			</div>
		);
	}
}

export default withRouter(ProductListPage);
