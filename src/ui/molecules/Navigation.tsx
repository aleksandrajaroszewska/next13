import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphQlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { Route } from "next";
import Search from "../atoms/Search";
import { getProductList } from "@/api/products";

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

	const products = await getProductList();

	return (
		<div className="sticky top-0 z-10 flex  opacity-70">
			<nav className="w-full bg-fuchsia-900 " role="navigation">
				<ul className="flex items-center justify-between bg-fuchsia-900 px-24 py-4 text-fuchsia-100 ">
					<li role="link" className="text-fuchsia-100">
						<ActiveLink exact={true} href="/">
							Home
						</ActiveLink>
					</li>
					<li role="link" className="text-fuchsia-100">
						<ActiveLink href="/collections">collections</ActiveLink>
					</li>

					<li role="link" className="text-fuchsia-100">
						<ActiveLink exact={true} href="/products/1">
							all
						</ActiveLink>
					</li>
					<li role="link" className="text-fuchsia-100">
						<ActiveLink href="/categories/accessories">
							categories
						</ActiveLink>
					</li>
				</ul>
			</nav>
			<Search products={products} />
			<div className="flex w-40 items-center">
				<ShoppingCart color="white" size={20} />
				<ActiveLink className="ml-4 mr-4 text-white" href={modalUrl}>
					Cart ({quantity})
				</ActiveLink>
			</div>
		</div>
	);
}
