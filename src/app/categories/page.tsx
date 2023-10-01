import { getProductList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductList();
	if (!products) {
		return <div>Products not found</div>;
	}
	return (
		<main className={"flex justify-around bg-fuchsia-800"}>
			<ProductList products={products} />
		</main>
	);
}
