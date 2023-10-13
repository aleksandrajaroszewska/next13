import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function SuccessPage({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!searchParams.session_id) {
		redirect("/sdsdsd");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing Stripe secret key");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(
		searchParams.session_id,
	);

	return (
		<section className="m-auto p-4 ">
			<h1 className="bold py-8 text-xl  ">Order summary</h1>
			<p>Thank you for your order!</p>
			{session.payment_status}
		</section>
	);
}
