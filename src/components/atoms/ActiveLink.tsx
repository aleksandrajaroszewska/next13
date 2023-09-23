"use client";
import Link from "next/link";
import clsx from "clsx";
import { notFound, usePathname, useRouter } from "next/navigation";
import { NextRouter } from "next/router";
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

	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? true : false}
		>
			{children}
		</Link>
	);
};

// ("use client");
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { type ReactNode } from "react";
// import { type Route } from "next";

// type ActiveLinkProps<T extends string> = {
// 	href: Route<T>;
// 	children: ReactNode;
// 	exact?: boolean;
// 	className?: string;
// 	activeClassName?: string;
// };

// export const ActiveLink = <T extends string>({
//     href,
//     children,
//     exact = false,
//     className = "text-blue-500 hover:text-blue-600",
//     activeClassName = "border-b-2 border-red-700",
// }: ActiveLinkProps<T>) => {
//     const pathname = usePathname();

//     if (pathname === null) {
//         return null; // Możesz również zwrócić pusty komponent lub inny komunikat błędu
//     }

//     const isActive = exact
//         ? pathname === href
//         : pathname.startsWith(${href}/);

//     return (
//         <Link
//             href={href}
//             className={${className} ${isActive && activeClassName}}
//         >
//             {children}
//         </Link>
//     );
// };
