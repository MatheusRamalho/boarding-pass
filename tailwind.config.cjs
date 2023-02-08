/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx',
		'./index.html'
	],
	theme: {
		extend: {
			colors: {
				gradient: 'linear-gradient(167.96deg, #8257E5 0%, #271A45 100%)',
			},
		},
	},
	plugins: [],
}
