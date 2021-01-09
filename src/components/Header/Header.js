import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import * as actions from '../ProductListPage/actions';

import './Header.scss';

class Header extends Component {
	state = {};
	componentDidMount() {
		let cartItems = JSON.parse(localStorage.getItem('cartItems'));
		if (cartItems)
			this.props.setCartItems(JSON.parse(localStorage.getItem('cartItems')));
	}
	handleBackButton = () => {
		this.props.history.push('/');
	};
	render() {
		const { cartItems } = this.props;
		let route = window.location.href.split('/')[3];

		return (
			<header className='header-container'>
				{route && (route == 'cart' || route == 'product') ? (
					<div className='back-button' onClick={this.handleBackButton}>
						<i class='fas fa-arrow-left'></i>
					</div>
				) : null}
				<h1>Best Food App</h1>
				<div className='cart-header'>
					<Link to='/cart'>
						<i
							className='fa badge'
							style={{ fontSize: '24px', color: 'white' }}
							value={cartItems.length}
						>
							&#xf07a;
						</i>
						{/* <i className='fa fa-shopping-cart cart'>({cartItems.length})</i> */}
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
