import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphQlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { Route } from "next";

export async function Navigation() {
	const cartId = cookies().get("cartId")?.value;
	const cart = cartId
		? await executeGraphql({
				query: CartGetByIdDocument,
				variables: {
					id: cartId,
				},
		  })
		: null;

	const quantity = cart?.order?.orderItems.length ?? 0;

	const modalUrl = "/cart" as Route<"string">;

	return (
		<nav className=" sticky top-0 z-10 opacity-70" role="navigation">
			<ul className=" flex items-center justify-between bg-fuchsia-900 px-24 py-4 text-fuchsia-100 ">
				<li className="text-fuchsia-100">
					<ActiveLink exact={true} href="/">
						Home
					</ActiveLink>
				</li>
				<li className="text-fuchsia-100">
					<ActiveLink exact={true} href="/products/1">
						all
					</ActiveLink>
				</li>
				<li className="text-fuchsia-100">
					<ActiveLink href="/categories">categories</ActiveLink>
				</li>

				<li className="text-fuchsia-100">
					<ActiveLink exact={false} href="/categories/t-shirts/1">
						t-shirts
					</ActiveLink>
				</li>
				<li className="text-fuchsia-100">
					<ActiveLink exact={false} href="/categories/hoodies/1">
						hoodies
					</ActiveLink>
				</li>
				<li className="text-fuchsia-100">
					<ActiveLink exact={false} href="/categories/accessories/1">
						accesories
					</ActiveLink>
				</li>
				<li className="flex">
					<ShoppingCart color="white" size={20} />
					<ActiveLink className="ml-2" href={modalUrl}>
						Cart ({quantity})
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
}
