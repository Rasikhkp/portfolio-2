/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				romo: ['"Roboto Mono"', "monospace"],
				mulish: "Mulish",
			},
		},
	},
	plugins: [],
};
