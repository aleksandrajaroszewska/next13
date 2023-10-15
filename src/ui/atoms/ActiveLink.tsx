"use client";
import Link from "next/link";
import clsx from "clsx";
import { notFound, usePathname } from "next/navigation";

import { Route } from "next";
import { type ReactNode } from "react";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: ReactNode;
	exact?: boolean;
	className?: string;
	activeClassName?: string;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = false,
	className = "text-fuchsia-100 hover:text-fuchsia-500",
	activeClassName = "border-b-2 border-fuchsia-700",
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	if (pathname === null) {
		return notFound();
	}

	const isActive = exact
		? pathname === href
		: pathname.startsWith(`${href}/`);

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? true : undefined}
		>
			{children}
		</Link>
	);
};
