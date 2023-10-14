import { getProductList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

export default async function HomePage() {
	const products = await getProductList();
	return (
		<main>
			<h1>Home page </h1>
			<ProductList products={products} />
		</main>
	);
}
