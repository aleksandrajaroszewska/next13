import { type Metadata } from "next";

import { getProductsById } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { cookies } from "next/headers";

import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { revalidatePath, revalidateTag } from "next/cache";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	if (!product) {
		return {
			title: "Product not found",
		};
	}

	return {
		title: `product ${product.name}`,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [
				{
					url: product.images[0]?.url || "/placeholder.png",
				},
			],
		},
	};
};

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

	async function addProductToCartAction(_formData: FormData) {
		"use server";
		const cart = await getOrCreateCart();

		await addProductToCart(cart.id, params.productId);
		revalidateTag("cart");
	}

	return (
		<article className="mx-auto max-w-xl">
			<div className="flex flex-col justify-between">
				<ProductCoverImage images={product.images} />
				<h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
				<p className="my-2">price:{product.price}</p>
				<p className="my-2">{product.categories[0]?.name}</p>
				<p className="my-2">{product.description}</p>
				<form action={addProductToCartAction}>
					<input type="hidden" name="productId" value={product.id} />
					<AddToCartButton />
				</form>
			</div>
		</article>
	);
}
