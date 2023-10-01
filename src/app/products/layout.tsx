import { getProductList } from "@/api/products";
import ProductList from "@/components/organisms/ProductList";

import { ReactNode, Suspense } from "react";

export default async function ProductsLayout({
	children,
}: {
	children: ReactNode;
}) {
	const products = await getProductList();
	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-fuchsia-800">
			<aside className="col-span-3 mb-8 mt-8 bg-fuchsia-950 px-8 py-4 shadow-xl">
				<h2 className="mb-4 text-xl font-bold">Polecane produkty</h2>

				<ProductList products={products} />
			</aside>
			<main className="col-span-9 px-8 py-4 shadow-xl">
				{children}
			</main>
		</div>
	);
}
