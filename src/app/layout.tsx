import { ActiveLink } from "@/components/atoms/ActiveLink";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

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
			<body className={inter.className}>
				<nav role="navigation">
					<ul className="flex items-center justify-between bg-fuchsia-900 p-8 text-fuchsia-100">
						<li className="text-fuchsia-100">
							<ActiveLink href="/">Home</ActiveLink>
						</li>
						<li className="text-fuchsia-100">
							<ActiveLink href="/products">all</ActiveLink>
						</li>
					</ul>
				</nav>
				<main className="flex min-h-screen  bg-fuchsia-800 font-sans text-fuchsia-100">
					{children}
				</main>
				<footer className="bg-fuchsia-950 text-fuchsia-100">
					<div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
						<p className="text-center text-sm text-fuchsia-100 sm:text-left">
							© 2023 13next
						</p>
						<span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
							<a className="text-fuchsia-100"> s</a>
						</span>
					</div>
				</footer>
			</body>
		</html>
	);
}
