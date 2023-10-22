"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { type ReactNode } from "react";

export const SubmitButton = (props: { children: ReactNode }) => {
	const { children, ...buttonAttributes } = props;
	const { pending } = useFormStatus();

	return (
		<button type="submit" disabled={pending} {...buttonAttributes}>
			{children}
		</button>
	);
};
