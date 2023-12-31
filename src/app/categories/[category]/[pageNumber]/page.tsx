import { getProductsByCategorySlug } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";

import { notFound } from "next/navigation";
import { Pagination } from "@/ui/molecules/Pagination";
import { Metadata } from "next";

// export async function generateStaticParams({
// 	params,
// }: {
// 	params: { category: string };
// }) {
// 	if (params.category === "t-shirts") {
// 		return [{ pageNumber: "1" }];
// 	} else if (params.category === "hoodies") {
// 		return [{ pageNumber: "1" }];
// 	} else if (params.category === "accessories") {
// 		return [{ pageNumber: "1" }];
// 	}
// 	return [];
// }

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { category: string };
// }): Promise<Metadata> => {
// 	return {
// 		title: ` ${params.category}`,
// 	};
// };

export const metadata: Metadata = {
	title: "categories",
};

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(
		params.category,
		Number(params.pageNumber),
	);

	const chosenCategory = params.category;

	if (!products) {
		notFound();
	}

	return (
		<div>
			<h1>categories</h1>
			<ProductList products={products} />

			<Pagination
				currentPage={
					params.pageNumber ? Number(params.pageNumber) : 1
				}
				totalPages={2}
				pageType={`categories/${chosenCategory}`}
			/>
		</div>
	);
}
