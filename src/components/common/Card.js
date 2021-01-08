import React from 'react';

import './Card.scss';

const Card = (props) => {
	const handleCardclick = () => {};
	return (
		<div className='card-container' onClick={handleCardclick}>
			<div className='image-conatiner'></div>
			<div className='card-body'>
				<div className='item-desc-container'>
					<div className='item-desc'></div>
					<div className='item-price'></div>
				</div>
				<button className='addBtn' onClick={props.handleAddBtnClick}>
					{props.btnTitle}
				</button>
			</div>
		</div>
	);
};

export default Card;
