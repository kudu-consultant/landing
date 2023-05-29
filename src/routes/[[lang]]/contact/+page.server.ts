import { DEFAULT_LANGUAGE } from 'CONSTANTS'

export const load = async ({ params }) => {
	const locales: {
		title: string
		subtitle: string
		form: {
			labels: {
				name: string
				email: string
				subject: string
				message: string
			}
			recaptchaNode: string
			buttonSubmit: string
		}
	} = (await import(`../../../locales/${params.lang ?? DEFAULT_LANGUAGE}.json`)).default.pages
		.contact
	return {
		locales
	}
}
