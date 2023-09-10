import { ProductListItem } from "../molecules/ProductListItem";

export const ProductList = () => {
	const products = [
		{
			id: 1,
			data: {
				category: "clothes",
				title: "skirt",
				price: 45,
				salePrice: 30,
			},
		},
		{
			id: 2,
			data: {
				category: "clothes",
				title: "jeans",
				price: 100,
				salePrice: 80,
			},
		},
		{
			id: 3,
			data: {
				category: "cloths",
				title: "dress",
				price: 50,
				salePrice: 40,
			},
		},
		{
			id: 4,
			data: {
				category: "category",
				title: "name",
				price: 45,
				salePrice: 30,
			},
		},
	];
	return (
		<ul className="flex h-screen w-full items-center justify-center">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product.data} />
			))}
		</ul>
	);
};
