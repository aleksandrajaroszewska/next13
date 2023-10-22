import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphQlApi";
import { CartGetByIdDocument } from "@/gql/graphql";
import { Route } from "next";
import { Search } from "../atoms/Search";
import { getProductsList } from "@/api/products";
import { getCartByIdFromCookies } from "@/api/cart";

export async function Navigation() {
	const cart = await getCartByIdFromCookies();

	const quantity = cart?.orderItems.length ?? 0;

	const modalUrl = "/cart" as Route<"string">;

	return (
		<div className="sticky top-0 z-10 flex  opacity-70">
			<nav className="w-full bg-fuchsia-900 " role="navigation">
				<ul className="flex h-full items-center justify-between bg-fuchsia-900 px-24 py-4 text-fuchsia-100 ">
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
			<Search />
			<div className="flex w-40 items-center bg-fuchsia-900 ">
				<ShoppingCart color="white" size={20} />
				<ActiveLink className="ml-4 mr-4 text-white" href={modalUrl}>
					Cart<span>({quantity})</span>
				</ActiveLink>
			</div>
		</div>
	);
}
