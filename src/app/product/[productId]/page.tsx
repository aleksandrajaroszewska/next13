import { ProductListItem } from "@/components/molecules/ProductListItem";
import { Product } from "@/components/organisms/ProductList";
import { type Metadata } from "next";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await (
		await fetch(
			`https://naszsklep-api.vercel.app/api/products/${params.productId}`,
		)
	).json();

	return {
		title: `product ${product.title}`,
		description: product.description,
		openGraph: {
			title: product.title,
			description: product.description,
			images: [
				{
					url: product.image,
				},
			],
		},
	};
};

// export const metadata: Metadata = {
// 	title: "Product",
// };

export async function generateStaticParams() {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products`,
	);
	const products = (await res.json()) as {
		id: string;
		title: string;
	}[];

	return products.map((product) => ({ productId: product.id }));
}

export default async function SingleProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products/" +
			params.productId,
	);
	const product = (await res.json()) as Product;

	return (
		<main className="mx-auto max-w-xl">
			<h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
			<ProductListItem key={product.id} product={product} />
		</main>
	);
}
