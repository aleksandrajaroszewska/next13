import { Product } from "@/api/types";
import { ProductListItem } from "@/components/molecules/ProductListItem";
import { executeGraphql } from "@/api/graphQlApi";

import { type Metadata } from "next";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";

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
	// const product = await executeGraphql(
	// 	ProductsGetByCategorySlugDocument,
	// 	{ slug: params.category },
	// );

	const product = {
		id: "ckdu4bmyg0h1f0102jk0mwn2g",
		name: "Tote Bag",
		description:
			"Carry your groceries in an eco-friendly way, repping your favorite Headless CMS",
		categories: [{ id: "ckdu4bmyg0h1f0102jk0mwn2g", name: "Cups" }],
		images: [
			{
				id: "ckdu4bmyg0h1f0102jk0mwn2g",
				url: "https://media.graphassets.com/VppBzb2IQ0aQc5EHoSo0",
			},
		],
		price: 1299,
	};

	return (
		<main className="mx-auto max-w-xl">
			<h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
			<ProductListItem key={product.id} product={product} />
		</main>
	);
}
