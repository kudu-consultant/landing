import { error, json } from '@sveltejs/kit'
import { validators } from 'utils'
import nodemailer from 'nodemailer'
import { render } from 'svelte-email'
import { env } from '$env/dynamic/private'
import type { RequestHandler } from './$types'
import Contact from 'libs/emails/Contact.svelte'
import { isValidRecaptcha } from 'libs/recaptcha'
import { logger } from 'libs/logger'
import { DEFAULT_LANGUAGE } from 'CONSTANTS'

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/27`
 *
 * @description
 * Endpoint for sending emails from the app's contact forms. Includes reCAPTCHA validation.
 * If not error ocurred, two emails will be sent: the first to the recipient address and
 * the second as a confirmation to the sender.
 *
 * @example
 * ```js
 * fetch('/api/contact', {
 * 	method: 'POST',
 * 	headers: { 'Content-Type': 'application/json' },
 * 	body: JSON.stringify({
 * 		token: 'your_recaptcha_token',
 * 		lang: 'en',
 * 		name: 'John Doe',
 * 		email: 'example@example.com',
 * 		mmessage: 'cool_message'
 * 	})
 * })
 * ```
 */
export const POST: RequestHandler = async ({ request }) => {
	const { token, lang, ...data } = await request.json()

	if (!(await isValidRecaptcha(env.RECAPTCHA_SECRET_KEY as string, token))) {
		logger.trackMessage('Invalid Google reCAPTCHA. This user may be a robot', 'info', {
			method: 'post',
			route: 'api/contact'
		})
		throw error(400, {
			message: 'Invalid recaptcha token'
		})
	}

	if (
		!validators.isStringValid(data.name) ||
		!validators.isEmailValid(data.email) ||
		!validators.isStringValid(data.subject) ||
		!validators.isStringValid(data.message)
	) {
		logger.trackMessage(
			'Invalid data properties. In the usually flow, this error should never be thrown',
			'warning',
			{ method: 'post', route: 'api/contact' }
		)
		throw error(400, { message: 'Malformed request' })
	}

	const transporter = nodemailer.createTransport({
		host: env.SMTP_HOST,
		port: Number(env.SMTP_PORT),
		secure: true,
		auth: {
			user: env.SMTP_USER,
			pass: env.SMTP_PASSWORD
		}
	})

	const emailHtml = render({
		template: Contact as never,
		props: {
			name: data.name,
			message: data.message
		}
	})

	const response = await transporter.sendMail({
		from: data.email,
		to: env.SMTP_USER,
		replyTo: data.email,
		subject: data.subject,
		html: emailHtml
	})

	if (!response.accepted[0]) {
		logger.trackError(
			new Error(
				"Nodemailer fails to send the user's email to SMPT_USER. As a result, the user is unable to contact the Kudu sales team"
			),
			'fatal',
			data
		)
		throw error(500, { message: 'Error when confirming email delivery' })
	}

	const localesContactFeedback: { subject: string; message: string } = (
		await import(`../../../locales/${lang ?? DEFAULT_LANGUAGE}.json`)
	).default.emails.contactFeedback
	const response2 = await transporter.sendMail({
		from: data.email,
		to: data.email,
		subject: localesContactFeedback.subject,
		text: localesContactFeedback.message
	})

	if (!response2.accepted[0]) {
		logger.trackError(
			new Error(
				'Nodemailer fails to send the confirmation message to the user indicating that the Kudu sales team has received their message'
			),
			'warning',
			data
		)
	}

	return json({}, { status: 200 })
}

export const prerender = false
