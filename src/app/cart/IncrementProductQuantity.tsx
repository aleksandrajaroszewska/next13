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
			{optimisticQuantity}
			<button
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="ml-2 h-6 w-6 border bg-fuchsia-100 text-stone-950"
			>
				+
			</button>
		</form>
	);
};

// import { changeItemQuantity } from "../actions";

// export function ChangeQuantity({
// 	itemId,
// 	quantity,
// }: {
// 	itemId: string;
// 	quantity: number;
// }) {
// 	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
// 		quantity,
// 		(_state, newQuantity: number) => newQuantity,
// 	);

// 	return (
// 		<form className="flex">
// 			<span className="w-8 text-center">{optimisticQuantity}</span>
// 			<button
// 				className="h-6 w-6 border"
// 				type="submit"
// 				formAction={async () => {
// 					setOptimisticQuantity(optimisticQuantity + 1);
// 					await changeItemQuantity(itemId, optimisticQuantity + 1);
// 				}}
// 			>
// 				+
// 			</button>
// 		</form>
// 	);
// }
