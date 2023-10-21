import { executeGraphql } from "./graphQlApi";
import { cookies } from "next/headers";

import {
	CartAddProductDocument,
	CartCreateDocument,
	CartFragment,
	CartGetByIdDocument,
	ProductListItemFragment,
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

// export async function addProductToCart(
// 	cartId: string,
// 	productId: string,
// 	qty?: number,
// ) {
// 	const { product } = await executeGraphql({
// 		query: ProductsGetByIdDocument,
// 		variables: {
// 			id: productId,
// 		},
// 		cache: "no-store",
// 	});
// 	if (!product) {
// 		throw new Error(`Product with id ${productId} not found`);
// 	}

// 	// $cartId: ID!
// 	// $productId: ID!
// 	// $total: Int!
// 	// $quantity: Int!
// 	// $orderItemId: ID

// 	await executeGraphql({
// 		query: CartAddProductDocument,
// 		variables: {
// 			cartId,
// 			quantity: qty || 1,
// 			productId,
// 			total: product.price,
// 			orderItemId: undefined,
// 		},
// 		cache: "no-store",
// 	});
// }

export async function addProductToCart(
	cart: CartFragment,
	product: ProductListItemFragment,
) {
	const productId = product.id;
	const productInCart = cart.orderItems.find((item) =>
		item.product?.id === productId ? item : null,
	);

	return executeGraphql({
		query: CartAddProductDocument,
		variables: {
			cartId: cart.id,
			productId: productId,
			orderItemId: productInCart ? productInCart.id : null,
			quantity: productInCart ? productInCart.quantity + 1 : 1,
			total: productInCart
				? productInCart.total * (productInCart.quantity + 1)
				: product.price,
		},
		cache: "no-store",
	});
}
