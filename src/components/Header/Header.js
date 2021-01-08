import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Cart from '../Cart';
import './Header.scss';

class Header extends Component {
	state = {};
	render() {
		return (
			<header className='header-container'>
				<h1>Best Food App</h1>
				<div className='cart-header'>
					<Link to='/cart'>
						<i className='fa fa-shopping-cart cart'></i>
					</Link>
				</div>
			</header>
		);
	}
}

export default Header;
