import { DEFAULT_LANGUAGE } from 'CONSTANTS'
import type { LocalesContactForm } from '../../../types/locales-contact-form.js'

export const load = async ({ params }) => {
	const locales: {
		title: string
		subtitle: string
		form: LocalesContactForm
	} = (await import(`../../../locales/${params.lang ?? DEFAULT_LANGUAGE}.json`)).default.pages
		.contact
	return {
		locales
	}
}
