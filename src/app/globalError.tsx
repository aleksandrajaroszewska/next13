"use client";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<h2>Something went wrong globally!</h2>
				<p>Error: {error.digest}</p>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
