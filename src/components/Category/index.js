import React, { Component } from 'react';

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
	handleAddBtnClick = (product) => {
		const cartItems =
			(localStorage.getItem('cartItems') &&
				JSON.parse(localStorage.getItem('cartItems'))) ||
			[];
		const updatedCartItems = [...cartItems, product];
		this.props.setCartItems(updatedCartItems);
		localStorage.setItem('cartItems', JSON.stringify([...cartItems, product]));
	};
	handleSearch = (event) => {
		this.setState({ searchText: event.target.value });
	};
	handleCategorySelect = (selectedCategory) => {
		this.setState({ selectedCategory });
	};
	render() {
		const { productList } = this.props;
		const { selectedCategory, searchText } = this.state;
		const favProduct = productList.data
			? searchText
				? productList.data.recipes.filter(
						(e) =>
							(selectedCategory &&
								e.category == selectedCategory &&
								e.name.toLowerCase().includes(searchText.toLowerCase())) ||
							e.name.toLowerCase().includes(searchText.toLowerCase())
				  )
				: selectedCategory
				? productList.data.recipes.filter((e) => e.category == selectedCategory)
				: productList.data.recipes
			: [];
		return (
			<div className='categories-items-container'>
				<div className='categories-items-header'>
					<i className='fa fa-search' aria-hidden='true'></i>

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
								<div
									className={`category ${
										selectedCategory === category.name && 'selected'
									}`}
									onClick={() => this.handleCategorySelect(category.name)}
								>
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
					{favProduct
						? this.createCategoryItemsList(favProduct)
						: 'No Products found'}
				</div>
			</div>
		);
	}
}

export default Categories;
