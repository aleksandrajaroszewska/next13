import { getCartByIdFromCookies } from "@/api/cart";
import { formatMoney } from "@/utils";

import { redirect } from "next/navigation";
import { IncrementProductQuantity } from "./IncrementProductQuantity";
import { RemoveButton } from "./RemoveButton";

export default async function CartPage() {
	const cart = await getCartByIdFromCookies();
	if (!cart) {
		redirect("/");
	}
	return (
		<section>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quan.</th>
						<th>psc.</th>
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
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>{item.quantity}</td>
								<td>
									<IncrementProductQuantity
										quantity={item.quantity}
										itemId={item.id}
									/>
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>
									<RemoveButton productId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</section>
	);
}
