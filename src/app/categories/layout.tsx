import { getProductsRelated } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";
import RelatedProducts from "@/ui/organisms/RelatedProducts";

import { ReactNode, Suspense } from "react";

export default async function ProductsLayout({
	children,
}: {
	children: ReactNode;
}) {
	const products = await getProductsRelated();
	return (
		<div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-12 gap-x-8 bg-fuchsia-800">
			<RelatedProducts />
			<main className="col-span-9 px-8 py-4 shadow-xl">
				{children}
			</main>
		</div>
	);
}
