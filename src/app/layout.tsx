import { ActiveLink } from "@/ui/atoms/ActiveLink";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import { Navigation } from "@/ui/molecules/Navigation";
import clsx from "clsx";
import { getProductsById } from "@/api/products";

const montserrat = Montserrat({
	subsets: ["latin", "latin-ext"],
});

// export const metadata: Metadata = {
// 	title: "ttttt",
// };

export default function RootLayout({
	children,
	modal,
}: {
	children: React.ReactNode;
	modal: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={clsx(montserrat.className, "bg-fuchsia-800")}>
				<Navigation />
				<main className="flex min-h-screen  bg-fuchsia-800 font-sans text-fuchsia-100">
					{children}
				</main>
				{modal}
				<footer className="bg-fuchsia-950 text-fuchsia-100">
					<div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
						<p className="text-center text-sm text-fuchsia-100 sm:text-left">
							© 2023 13next
						</p>
					</div>
				</footer>
			</body>
		</html>
	);
}
