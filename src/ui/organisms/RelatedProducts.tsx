import { getProductsRelated } from "@/api/products";
import ProductList from "./ProductList";

export default async function RelatedProducts() {
	const products = await getProductsRelated();
	return (
		<div
			data-testid="related-products"
			className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-fuchsia-800"
		>
			<aside className="col-span-3 mb-8 mt-8 bg-fuchsia-950 px-8 py-4 shadow-xl">
				<h2 className="mb-4 text-xl font-bold">categories</h2>

				<ProductList products={products} />
			</aside>
		</div>
	);
}
