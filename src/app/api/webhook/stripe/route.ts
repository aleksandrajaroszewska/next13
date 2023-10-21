//stripe-event-types is a package that contains all the types for Stripe events
/// <reference types="stripe-event-types" />

import { NextRequest } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest): Promise<Response> {
	const body: unknown = await request.json();
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing Stripe webhook secret key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");
	if (!signature) {
		return new Response("no signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	//ti see objects in console
	// console.dir(event, { depth: 999 });

	switch (event.type) {
		// each  block should have mutation to graphql and change order status

		case "payment_intent.created": {
			event.data.object.metadata.cardId;
		}
		// case "checkout.session.completed": {
		// 	event.data.object;
		// }
		// case "payment_intent.succeeded": {
		// 	event.data.object;
		// }
		// case "payment_intent.payment_failed": {
		// 	event.data.object;
		// }
		// case "charge.succeeded": {
		// 	event.data.object;
		// }
		// case "charge.failed": {
		// 	event.data.object;
		// }
	}

	return new Response("OK", { status: 200 });
}
