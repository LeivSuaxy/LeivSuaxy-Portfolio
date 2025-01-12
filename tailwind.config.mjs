/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					background: '#030712',
					text: '#FEFCFB',
					backgroudComponent: '#001F54',
					backgroudCHover: '#034078',
					backgroundTransParent: '1282A2',
				}
			}
		},
	},
	plugins: [],
}
