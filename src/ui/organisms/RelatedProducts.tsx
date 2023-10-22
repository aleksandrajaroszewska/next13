import { getProductsRelated } from "@/api/products";
import ProductList from "./ProductList";

export default async function RelatedProducts() {
	const products = await getProductsRelated();
	return (
		<div
			data-testid="related-products"
			className="m-8  w-full  bg-fuchsia-100"
		>
			<aside className="mb-8 mt-8 bg-fuchsia-950 px-8 py-4 shadow-xl">
				<h2 className="mb-4 text-xl font-bold">categories</h2>

				<ProductList products={products} />
			</aside>
		</div>
	);
}
