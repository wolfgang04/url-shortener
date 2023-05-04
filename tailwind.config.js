/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"cyan": "hsl(180, 66%, 49%)",
				"dark-Violet": "hsl(257, 27%, 26%)",
				"gray": "hsl(0, 0%,75%)",
				"hrayish-Violet": "hsl(257, 7%, 63%)",
				"very-Dark-Blue": "hsl(255, 11%, 22%)",
				"very-Dark-Violet": "hsl(260, 8%,14%)"
			}
		},
	},
	plugins: [],
};

