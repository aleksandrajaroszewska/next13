import { getProductList } from "@/api/products";
import ProductList from "@/components/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductList();
	return (
		<main className={"flex justify-around bg-fuchsia-800"}>
			<ProductList products={products} />
		</main>
	);
}
