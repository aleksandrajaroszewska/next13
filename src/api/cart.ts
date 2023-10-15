import { executeGraphql } from "./graphQlApi";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { get } from "http";
import {
	CartAddProductDocument,
	CartCreateDocument,
	CartFragment,
	CartGetByIdDocument,
	ProductsGetByIdDocument,
} from "@/gql/graphql";

export async function getCartByIdFromCookies() {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: { tags: ["cart"] },
			cache: "no-store",
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

export async function getOrCreateCart() {
	const existingCart = await getCartByIdFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	return cart.createOrder;
}

export function createCart() {
	return executeGraphql({
		query: CartCreateDocument,
		variables: {},
		cache: "no-store",
	});
}

export async function addProductToCart(
	orderId: string,
	productId: string,
) {
	const { product } = await executeGraphql({
		query: ProductsGetByIdDocument,
		variables: {
			id: productId,
		},
		cache: "no-store",
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			total: product.price,
			productId,
		},
		cache: "no-store",
	});
}
