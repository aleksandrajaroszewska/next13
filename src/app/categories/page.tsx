import { getProductList } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";
import NextLink from "next/link";

export default async function ProductsPage() {
	const products = await getProductList();
	if (!products) {
		return <div>Products not found</div>;
	}
	return (
		<main
			className={
				"flex flex-col justify-around bg-fuchsia-800 p-8 text-xl"
			}
		>
			<NextLink
				className="mb-4 block w-full text-left uppercase "
				href="/categories/accessories"
			>
				Akcesoria
			</NextLink>
			<NextLink
				className="text-lext mb-4 block w-full uppercase"
				href="/categories/t-shirts"
			>
				T-shirty
			</NextLink>
			<NextLink
				className="mb-4 block w-full text-left uppercase"
				href="/categories/hoodies"
			>
				Bluzy
			</NextLink>
			{/* <ProductList products={products} /> */}
		</main>
	);
}
