import { dev } from '$app/environment'
import { env } from '$env/dynamic/public'
import * as Sentry from '@sentry/sveltekit'
import type { HandleServerError } from '@sveltejs/kit'

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/25`
 *
 * @description
 * Configure the logger for use in the client-side parts of the app.
 * Call this function inside the `hooks.client.ts` file.
 *
 * @see
 * Links:
 * - {@link https://docs.sentry.io/platforms/javascript/guides/sveltekit/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F Sentry installation}
 *
 */
const clientSetup = () => {
	Sentry.init({
		dsn: env.PUBLIC_SENTRY_DSN,
		tracesSampleRate: 1.0,
		enabled: env.PUBLIC_LOGGER_ENABLED === 'true',
		environment: dev ? 'development' : 'production',
		serverName: env.PUBLIC_HOST_URL,

		// This sets the sample rate to be 10%. You may want this to be 100% while
		// in development and sample at a lower rate in production
		replaysSessionSampleRate: 0.1,

		// If the entire session is not sampled, use the below sample rate to sample
		// sessions when an error occurs.
		replaysOnErrorSampleRate: 1.0

		// If you don't want to use Session Replay, just remove the line below:
	})
}

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/25`
 *
 * @description
 * Configure the logger for use in the server-side parts of the app.
 * Call this function inside the `hooks.server.ts` file.
 *
 * @see
 * Links:
 * - {@link https://docs.sentry.io/platforms/javascript/guides/sveltekit/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F Sentry installation}
 *
 */
const serverSetup = () => {
	Sentry.init({
		dsn: 'https://8624b9002c65463bbff8e7ae1765cb6e@o4505233965121536.ingest.sentry.io/4505233968463872',
		tracesSampleRate: 1.0,
		enabled: env.PUBLIC_LOGGER_ENABLED === 'true',
		environment: dev ? 'development' : 'production',
		serverName: env.PUBLIC_HOST_URL
	})
}

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/25`
 *
 * @description
 * Handle function for every server error request. If the server throws any uncaught
 * exception, this handle catches the error and sends a report to the Sentry service.
 *
 * @see
 * Links:
 * - {@link https://docs.sentry.io/platforms/javascript/guides/sveltekit/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F Sentry installation}
 *
 */
const handleErrorWithLogger = Sentry.handleErrorWithSentry as (
	fn?: HandleServerError
) => HandleServerError
const handleLogger = Sentry.sentryHandle

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/25`
 *
 * @description
 * Tracks a message using Sentry for error monitoring and logging.
 *
 * @param message - The message to be tracked.
 * @param severity - The severity level of the message ('info', 'error', 'debug', 'fatal', 'log', 'warning').
 * @param details - Optional additional details to be included with the tracked message.
 *
 * @see
 * Links:
 * - {@link https://docs.sentry.io/platforms/javascript/guides/sveltekit/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F Sentry installation}
 *
 */
const trackMessage = (
	message: string,
	severity: 'info' | 'error' | 'debug' | 'fatal' | 'log' | 'warning',
	details?: Record<string, string>
) => {
	Sentry.withScope(function (scope) {
		if (details) scope.setContext('Details', details)
		scope.setLevel(severity)
		Sentry.captureMessage(message)
	})
}

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/25`
 *
 * @description
 * Tracks an error using Sentry for error monitoring and logging.
 *
 * @param error - The error object to be tracked.
 * @param severity - The severity level of the error ('info', 'error', 'debug', 'fatal', 'log', 'warning').
 * @param details - Optional additional details to be included with the tracked error.
 *
 * @see
 * Links:
 * - {@link https://docs.sentry.io/platforms/javascript/guides/sveltekit/manual-setup/?original_referrer=https%3A%2F%2Fwww.google.com%2F Sentry installation}
 *
 */
const trackError = (
	error: Error,
	severity: 'info' | 'error' | 'debug' | 'fatal' | 'log' | 'warning',
	details?: Record<string, string>
) => {
	Sentry.withScope(function (scope) {
		if (details) scope.setContext('Details', details)
		scope.setLevel(severity)
		Sentry.captureException(error)
	})
}

export const logger = {
	clientSetup,
	serverSetup,
	handleErrorWithLogger,
	handleLogger,
	trackMessage,
	trackError
}
