import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '../common/Card';
import './Category.scss';

class Categories extends Component {
	state = {
		searchText: '',
		selectedCategory: '',
	};
	createCategoryItemsList = (favProduct) =>
		favProduct.map((product, i) => (
			<Card
				product={product}
				btnTitle='ADD TO BAG'
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
	handleSearch = () => {};
	render() {
		const { productList } = this.props;
		const favProduct = productList.data ? productList.data.recipes : [];
		return (
			<div className='categories-items-container'>
				<div className='categories-items-header'>
					<input
						className='search-category'
						type='text'
						placeholder='Search for a particular food or Ingredient'
						value={this.state.searchText}
						onChange={this.handleSearch}
					/>
				</div>
				<div className='select-cat-text'>SELECT CATEGORIES</div>
				<div className='categories-conatiner'>
					{productList.data &&
						productList.data.categories.map((category) => {
							return (
								<div className='category'>
									<div className='category-image'>
										<img src={category.image} />
									</div>
									<div className='category-name'>
										{category.name.toUpperCase()}
									</div>
								</div>
							);
						})}
				</div>
				<div className='categories-items-content'>
					{this.createCategoryItemsList(favProduct)}
				</div>
			</div>
		);
	}
}

export default Categories;
