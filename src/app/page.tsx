import { getProductsList } from "@/api/products";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import ProductList from "@/ui/organisms/ProductList";
import Link from "next/link";

export default async function HomePage() {
	const response = await getProductsList({});
	const { products, productsConnection } = response;
	return (
		<main>
			<h1>Home page </h1>
			<Link href="/collections/summer-vibes">collections</Link>
			<ProductList products={products} />
		</main>
	);
}
