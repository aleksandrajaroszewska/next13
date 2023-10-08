import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navigation = () => {
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
				<li>
					<ActiveLink href="/cart">
						<ShoppingCart color="white" size={30} />
					</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
