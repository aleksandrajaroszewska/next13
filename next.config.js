/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products/t-shirts",
				destination: "/products/t-shirts/1",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
