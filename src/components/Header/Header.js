import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
	state = {};
	render() {
		const { cartItems } = this.props;
		console.log(cartItems);
		return (
			<header className='header-container'>
				<h1>Best Food App</h1>
				<div className='cart-header'>
					<Link to='/cart'>
						<i className='fa fa-shopping-cart cart'>({cartItems.length})</i>
					</Link>
				</div>
			</header>
		);
	}
}
const mapStateToProps = (store) => {
	return {
		...store.productList,
	};
};

export default connect(mapStateToProps, null)(Header);
