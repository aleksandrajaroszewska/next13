import { getCartByIdFromCookies } from "@/api/cart";
import { Overlay } from "@/app/@modal/(.)cart/Overlay";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function ModalCart() {
	const cart = await getCartByIdFromCookies();

	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm rounded-xl bg-fuchsia-900 p-6 text-fuchsia-100">
				<h2 className={"m-8 text-xl font-bold text-fuchsia-100"}>
					Cart Summary
				</h2>
				<ul className={"m-6"}>
					{cart?.orderItems.map((item) => (
						<li className={"flex p-2"} key={item.id}>
							{item.product?.name}
							<span className={"px-4"}>
								quantity: {item.quantity}
							</span>
						</li>
					))}
				</ul>
				<a
					className={
						"text-md m-8 w-28 rounded-md border-2 border-fuchsia-900 bg-fuchsia-100 p-2 text-black shadow-md  duration-300 ease-in hover:bg-fuchsia-600 "
					}
					href="/cart/main"
				>
					go to cart
				</a>
			</div>
		</>
	);
}
