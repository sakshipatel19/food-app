import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FavouriteItems from '../Favourite';

class ProductListPage extends Component {
	componentDidMount() {
		this.props.requestProductList();
	}

	render() {
		const { productList } = this.props;
		console.log(productList);
		return (
			<div className='product-listpage-container'>
				<FavouriteItems productList={productList} />
			</div>
		);
	}
}

export default withRouter(ProductListPage);
