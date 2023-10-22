"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);
	return (
		<form>
			<span data-testid="quantity" className="mr-2">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-6 w-6 border bg-fuchsia-100 text-stone-950"
			>
				+
			</button>
			{/* <button
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await changeItemQuantity(itemId, optimisticQuantity - 1);
				}}
				className="ml-2 h-6 w-6 border bg-fuchsia-100 text-stone-950"
			>
				-
			</button> */}
		</form>
	);
};
