/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	productionBrowserSourceMaps: true,
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				hostname: "cdn.sanity.io",
			},
		],
	},
	async redirects() {
		return [
			{
				source:'/pl/web-development-aplikacje-internetowe',
				destination: '/pl/web-development/aplikacje-internetowe',
				permanent: true
			},
			{
				source:'/pl/web-development-sklepy-internetowe',
				destination: '/pl/web-development/sklepy-internetowe',
				permanent: true
			},
			{
				source:'/pl/web-development-strony-internetowe',
				destination: '/pl/web-development/strony-internetowe',
				permanent: true
			},
			{
				source:'/pl/grafika-design-projektowanie-logo',
				destination: '/pl/grafika-design/projektowanie-logo',
				permanent: true
			},
			{
				source:'/pl/grafika-design-identyfikacja-wizualna-marki',
				destination: '/pl/grafika-design/identyfikacja-wizualna-marki',
				permanent: true
			},
			{
				source:'/pl/grafika-design-audyt-ux-ui',
				destination: '/pl/grafika-design/audyt-ux-ui',
				permanent: true
			},
			{
				source:'/pl/akademia/:slug(\\d+)',
				destination:'/pl/akademia/strona/:slug',
				permanent: true
			},
			{
				source:'/pl/blog/:slug(\\d+)',
				destination:'/pl/blog/strona/:slug',
				permanent: true
			},
		]
	}
}
module.exports = nextConfig;
