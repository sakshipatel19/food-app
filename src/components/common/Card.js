import React from 'react';

import './Card.scss';

const Card = (props) => {
	const handleCardclick = () => {};
	return (
		<div className='card-container' onClick={handleCardclick}>
			<div className='image-conatiner'>
				<img className='image' scr={props.product.image} alt='productImage' />
			</div>
			<div className='card-body'>
				<div className='item-desc-container'>
					<div className='item-desc'>{props.product.name}</div>
					<div className='item-price'>{props.product.price}</div>
				</div>
				<button className='addBtn' onClick={props.handleAddBtnClick}>
					{props.btnTitle}
				</button>
			</div>
		</div>
	);
};

export default Card;
