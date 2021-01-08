import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';

import ProductListPage from './ProductListPage';

const mapStateToProps = (store) => {
	return {
		...store.productList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...actions }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
