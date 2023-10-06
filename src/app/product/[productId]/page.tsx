import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { executeGraphql } from "@/api/graphQlApi";

import { type Metadata } from "next";

import { getProductsById } from "@/api/products";

// export const generateMetadata = async ({
// 	params,
// }: {
// 	params: { productId: string };
// }): Promise<Metadata> => {
// 	const product = await (
// 		await fetch(
// 			`https://naszsklep-api.vercel.app/api/products/${params.productId}`,
// 		)
// 	).json();

// 	return {
// 		// title: `product ${product.title}`,
// 		title: `product `,
// 		description: product.description,
// 		// openGraph: {
// 		// 	title: product.title,
// 		// 	description: product.description,
// 		// 	images: [
// 		// 		{
// 		// 			url: product.image,
// 		// 		},
// 		// 	],
// 		// },
// 	};
// };

// export const metadata: Metadata = {
// 	title: "Product",
// };

// export async function generateStaticParams() {
// 	const res = await fetch(
// 		`https://naszsklep-api.vercel.app/api/products`,
// 	);
// 	const products = (await res.json()) as {
// 		id: string;
// 		title: string;
// 	}[];

// 	return products.map((product) => ({ productId: product.id }));
// }

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductsById(params.productId);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<main className="mx-auto max-w-xl">
			<h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
			<ProductListItem  product={product} />
		</main>
	);
}
