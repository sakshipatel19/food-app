import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Favourite.scss';
import Card from '../common/Card';

class FavouriteItems extends Component {
	createFavouriteItemsList = (favProduct) =>
		favProduct.map((product, i) => (
			<Card
				product={product}
				btnTitle='REORDER'
				index={i + 1}
				productId={`${product.category}${i + 1}`}
				handleCardclick={this.handleCardclick}
				handleAddBtnClick={this.handleAddBtnClick}
			/>
		));
	handleCardclick = (product) => {
		this.props.setProductDetail(product);
		this.props.history.push('/product');
	};
	handleAddBtnClick = () => {};
	render() {
		const { productList } = this.props;

		const favProduct = productList.data
			? productList.data.recipes.filter((item) => item.isFavourite)
			: [];
		return (
			<div className='favourite-items-container'>
				<div className='favourite-items-header'>
					<h2>FAVOURITES</h2>
					<h3>Enjoy what you have been ordering</h3>
				</div>
				<div className='favourite-items-content'>
					{this.createFavouriteItemsList(favProduct)}
				</div>
			</div>
		);
	}
}

export default FavouriteItems;
