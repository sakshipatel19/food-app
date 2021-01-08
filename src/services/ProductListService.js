class ProductListService {
	fetchProductList = async () =>
		await fetch('http://temp.dash.zeta.in/food.php').then((res) => res.json());
}

export default new ProductListService();
