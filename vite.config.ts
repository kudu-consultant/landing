import { sentrySvelteKit } from '@sentry/sveltekit'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig(() => ({
	optimizeDeps: {
		exclude: ['kudu-components']
	},
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: process.env.SENTRY_ORG,
				project: process.env.SENTRY_PROJECT,
				authToken: process.env.SENTRY_AUTH_TOKEN,
				url: process.env.SENTRY_URL,
				cleanArtifacts: true,
				rewrite: false
			}
		}),
		sveltekit()
	]
}))
