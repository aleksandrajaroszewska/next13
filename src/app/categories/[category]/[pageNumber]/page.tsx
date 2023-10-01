import { executeGraphql } from "@/api/graphQlApi";
import { getProductsByCategorySlug } from "@/api/products";
import ProductList from "@/ui/organisms/ProductList";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { notFound } from "next/navigation";

export async function generateStaticParams({
	params,
}: {
	params: { category: string };
}) {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else if (params.category === "skirts") {
		return [{ pageNumber: "1" }];
	} else if (params.category === "dresses") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}
	return [];
}

export default async function CategoryProductsPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(params.category);
	if (!products) {
		notFound();
	}

	return (
		<div>
			<h1>
				CategoryProductsPage {params.category} page{" "}
				{params.pageNumber}
			</h1>
			<ProductList products={products} />
			{/* <pre>{JSON.stringify(category, null, 2)}</pre> */}
		</div>
	);
}
