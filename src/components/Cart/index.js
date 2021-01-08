import React, { Component } from 'react';

import './Cart.scss';

class Cart extends Component {
	state = {
		cartItems: JSON.parse(localStorage.getItem('cartItems')),
	};
	handleRemoveItem = () => {};
	render() {
		const { cartItems } = this.state;
		console.log(cartItems);
		return (
			<div className='cart-conatiner'>
				<div className='cart-items-conatiner'>
					{cartItems.map((item) => (
						<div className='cart-item'>
							<div
								className='remove-item'
								onClick={this.handleRemoveItem}
							></div>
							<div className='item-image'>
								<img src={item.image} />
							</div>
							<div className='item-name-price'>
								<div className='item-name'>{item.name}</div>
								<div className='item-price'>{item.price}</div>
							</div>
							<div className='add-remove-btn'></div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Cart;
