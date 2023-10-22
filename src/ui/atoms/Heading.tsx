import type { ElementType } from "react";

type HeadingProps = {
	tag?: Extract<ElementType, `h${number}`>;
	title: string;
};

export function Heading(props: HeadingProps) {
	const { tag = "h1", title } = props;
	const Tag = tag;
	const fontSize = {
		h1: "text-2xl/normal",
		h2: "text-xl/normal",
		h3: "text-lg/normal",
		h4: "text-base/normal",
		h5: "text-base/normal",
		h6: "text-base/normal",
	};

	return (
		<Tag className={`font-semibold text-gray-950 ${fontSize[tag]}`}>
			{title}
		</Tag>
	);
}
