/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: { min: '475px' },
			...defaultTheme.screens,
			'max-md': { max: '767px' }
		},
		extend: {
			containers: {
				'2xs': '16rem'
			}
		},
		colors: {
			black: '#000000',
			white: '#ffffff'
		},
		aspectRatio: {
			'1/1': '1 / 1'
		}
	},
	daisyui: {
		themes: [
			{
				kududesign: {
					primary: '#D8304E',
					'primary-focus': '#A8304E',
					'primary-content': '#ffffff',
					secondary: '#000',
					'secondary-focus': '#000',
					'secondary-content': '#000',
					neutral: '#000',
					'neutral-focus': '#000',
					'neutral-content': '#000',
					'base-100': '#fff',
					'base-200': '#D6D6D6',
					'base-300': '#000',
					'base-content': '#A2A2A2',
					info: '#000',
					'info-content': '#000',
					success: '#37D39A',
					'success-content': '#000',
					warning: '#000',
					'warning-content': '#000',
					error: '#F87272',
					'error-content': '#000',
					'--rounded-btn': '99999px',
					'--border-btn': '1px',
					'--btn-focus-scale': '',
					'--animation-btn': '',
					'--btn-text-case': '',
					'--animation-input': '0.3s'
				}
			}
		],
		styled: true,
		base: true,
		utils: true,
		logs: false,
		rtl: false,
		prefix: ''
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/aspect-ratio'),
		require('daisyui')
	]
}
