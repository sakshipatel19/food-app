import React, { useState } from 'react';
import { withRouter } from 'react-router';

import './index.scss';

const ProductDetailPage = (props) => {
	const { product } = props;
	const { productCout, setProductCount } = useState(1);
	return (
		<div className='product-detail-page-conatiner'>
			<div className='product-image'>
				<img src={require('../../assets/images/1.jpg').default} />
			</div>
			<div className='product-info'>
				<div className='prduct-name-price'>
					<div className='prduct-name'>{product.name}</div>
					<div className='prduct-price'>{product.price}</div>
				</div>
				<div className='addRemoveBtn'>
					<i className='plus'>+</i>
					{productCout}
					<i className='minus'>-</i>
				</div>
			</div>
			<div className='category-rank-details'>
				<div className='category-type'>{`Category:${product.category}`}</div>
				<div className='rating'>{`${product.rating} Rating, (${product.reviews} Reviews)`}</div>
			</div>
			<div className='product-details'>
				<div className='details-title'>DETAILS</div>
				<div className='product-desc'>{product.details}</div>
			</div>
		</div>
	);
};

export default withRouter(ProductDetailPage);
