import React, { useState } from 'react';

const ProductDetailPage = ({ product }) => {
	const { productCout, setProductCount } = useState(1);
	return (
		<div className='product-detail-page-conatiner'>
			<div className='product-image'>
				<img src={product.image} />
			</div>
			<div className='product-info'>
				<div className='prduct-name-price'>
					<div className='prduct-name'></div>
					<div className='prduct-price'></div>
				</div>
				<div className='addRemoveBtn'>
					<i className='plus'>+</i>
					{productCout}
					<i className='minus'>-</i>
				</div>
			</div>
			<div className='product-details'>
				<div className='details-title'>DETAILS</div>
				<div className='product-desc'></div>
			</div>
		</div>
	);
};

export default ProductDetailPage;
