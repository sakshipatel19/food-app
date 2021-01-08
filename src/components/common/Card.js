import React from 'react';

import './Card.scss';

const Card = (props) => {
	const photo = require('../../assets/images/' + props.index + '.jpg').default;
	const handleAddBtnClick = (event, product) => {
		event.stopPropagation();
		props.handleAddBtnClick(product);
	};
	return (
		<div
			className='card-container'
			onClick={() => props.handleCardclick(props.product)}
		>
			<div className='image-conatiner'>
				<img className='image' src={photo} alt='productImage' />
			</div>
			<div className='card-body'>
				<div className='item-desc-container'>
					<div className='item-desc'>{props.product.name}</div>
					<div className='item-price'>{props.product.price}</div>
				</div>
				<button
					className='addBtn'
					onClick={(e) => handleAddBtnClick(e, props.product)}
				>
					{props.btnTitle}
				</button>
			</div>
		</div>
	);
};

export default Card;
