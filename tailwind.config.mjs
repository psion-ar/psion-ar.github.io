/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: { 
        fontFamily: {
            'display': ['"press start 2p"', 'ui-monospace'],
            'mono': ['"JetBrains Mono"', 'ui-monospace'],            
        },
		fontWeight: {
            light: '100',
            normal: '400',
            bold: '800',
        },
		colors: {
            transparent: 'transparent',
			'light-blue': '#7777FF',
            'dark-blue': '#110099',
            'black': '#111827',
            'red': '#D70101',
            'yellow': '#F1D801',
            'green': '#4ABB1F',
            'blue': '#246CD7',
            'orange': '#F48400',
        },
		extend: {
			colors: {
                inherit: 'inherit'
            }
		},
	},
	plugins: [],
}
