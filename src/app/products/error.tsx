"use client";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h1>ERROR {error.digest}</h1>
		</div>
	);
}
