/* eslint-disable @typescript-eslint/no-var-requires */
const { tailwindPreset } = require('kudu-ui-system/tailwindcss')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	presets: [tailwindPreset]
}
