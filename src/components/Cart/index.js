import React, { Component } from 'react';

import './Cart.scss';

class Cart extends Component {
	state = {
		cartItems: JSON.parse(localStorage.getItem('cartItems')),
	};
	handleRemoveItem = () => {};
	render() {
		const { cartItems } = this.state;
		return (
			<div className='cart-conatiner'>
				<div className='cart-items-conatiner'>
					{cartItems &&
						cartItems.map((item, i) => (
							<div className='cart-item'>
								<div className='img-desc-container'>
									<div className='item-image'>
										<img
											src={
												require('../../assets/images/' + (i + 1) + '.jpg')
													.default
											}
										/>
									</div>
									<div className='item-name-price'>
										<div className='item-name'>{item.name}</div>
										<div className='item-price'>{`RS ${item.price}`}</div>
									</div>
								</div>
								<div className='add-remove-btn'>
									<i className='plus'>+</i>

									<i className='minus'>-</i>
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default Cart;
