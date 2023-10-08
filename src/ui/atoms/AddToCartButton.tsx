"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="my-2  rounded-md  bg-blue-600 px-4 py-2 text-white shadow-sm transition-shadow hover:opacity-80 disabled:cursor-wait disabled:bg-slate-300"
		>
			add to cart
		</button>
	);
};
