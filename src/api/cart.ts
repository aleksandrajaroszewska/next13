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
	console.log("cartId", cartId);

	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: { tags: ["cart"] },
		});
		if (cart.order) {
			return cart.order;
		}
	}
}

export async function getOrCreateCart() {
	const existingCart = await getCartByIdFromCookies();
	console.log("existingCart", existingCart);

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	console.log("cart", cart);

	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	console.log("cart.createOrder", cart.createOrder);

	return cart.createOrder;
}

export function createCart() {
	return executeGraphql({ query: CartCreateDocument, variables: {} });
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
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	// const cart = await executeGraphql(CartGetByIdDocument, {
	// 	id: orderId,
	// });

	await executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			total: product.price,
			productId,
		},
	});
}
