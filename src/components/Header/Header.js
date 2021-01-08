import React, { Component } from 'react';

// import Cart from '../Cart';
import './Header.scss';

class Header extends Component {
	state = {};
	render() {
		return (
			<header className='header-container'>
				<h1>Best Food App</h1>
				{/* <Cart /> */}
			</header>
		);
	}
}

export default Header;
