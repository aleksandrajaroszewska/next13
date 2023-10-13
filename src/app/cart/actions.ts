"use server";

import { getCartByIdFromCookies } from "@/api/cart";
import { executeGraphql } from "@/api/graphQlApi";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
} from "@/gql/graphql";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import stripe, { Stripe } from "stripe";

export const changeItemQuantity = (
	itemId: string,
	quantity: number,
) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
		},
	});
};

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export async function handleStripePaymentAction() {
	"use server";

	const cart = await getCartByIdFromCookies();

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	if (!cart) {
		throw new Error("Missing cart");
	}
	if (!cart.orderItems) {
		throw new Error("Missing order items");
	}

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "p24"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "pln",
				product_data: {
					name: item.product?.name || "Unknown product",
				},
				unit_amount: item.product?.price || 0,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url:
			"http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel",
	});

	if (!checkoutSession.url) {
		throw new Error("Missing checkout session URL");
	}

	cookies().set("cartId", "");
	redirect(checkoutSession.url);
}
