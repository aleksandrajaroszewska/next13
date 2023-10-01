import { ActiveLink } from "@/components/atoms/ActiveLink";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import { Navigation } from "@/components/molecules/Navigation";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "13next",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pl">
			<body className={clsx(inter.className, "bg-fuchsia-800")}>
				<Navigation />

				<main className="flex min-h-screen  bg-fuchsia-800 font-sans text-fuchsia-100">
					{children}
				</main>
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
