import { getCartByIdFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";

import { redirect } from "next/navigation";

import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveButton } from "./RemoveButton";
import { handleStripePaymentAction } from "./actions";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();
	if (!cart) {
		console.log("no cart");
		redirect("/");
	}

	return (
		<section className="m-auto p-4  ">
			<h1 className="bold py-8 text-xl  ">Order summary</h1>
			<table>
				<thead>
					<tr className="p-2">
						<th>Product</th>
						<th>Quan.</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr className="p-10" key={item.product.id}>
								<td className="p-4">{item.product.name}</td>

								<td className="p-4">
									<IncrementProductQuantity
										quantity={item.quantity}
										itemId={item.id}
									/>
								</td>

								<td className="p-4">
									{formatMoney(item.product.price)}
								</td>
								<td className="p-4">
									<RemoveButton productId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<div>
				<form
					action={handleStripePaymentAction}
					className="ml-auto py-8"
				>
					<button
						type="submit"
						className="w-100 flex justify-center rounded-sm border bg-slate-100 px-8 py-2 text-black shadow-sm transition-colors hover:bg-slate-200"
					>
						Pay
					</button>
				</form>
			</div>
		</section>
	);
}
