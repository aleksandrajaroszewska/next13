export type Product = {
	id: string;
	name: string;
	description: string;
	price: number;
	categories: Array<{
		name: string;
	}>;
	images: Array<{
		url: string;
	}>;
};
