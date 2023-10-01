import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "../atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav className=" sticky top-0 z-10 opacity-70" role="navigation">
			<ul className=" flex items-center justify-between bg-fuchsia-900 px-24 py-4 text-fuchsia-100 ">
				<li className="text-fuchsia-100">
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li className="text-fuchsia-100">
					<ActiveLink href="/products">all</ActiveLink>
				</li>
				<li>
					<ShoppingCart color="white" size={30} />
				</li>
			</ul>
		</nav>
	);
};
