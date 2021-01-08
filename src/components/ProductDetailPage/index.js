import { connect } from 'react-redux';
import ProductDetailPage from './ProductDetailPage';

const mapStateToProps = (store) => {
	return {
		...store.productList,
	};
};

export default connect(mapStateToProps, null)(ProductDetailPage);
