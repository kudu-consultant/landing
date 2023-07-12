import { DEFAULT_LANGUAGE } from 'CONSTANTS'

export const load = async ({ params }) => {
	const locales: {
		title: string
		subtitle: string
	} = (await import(`../../../locales/${params.lang ?? DEFAULT_LANGUAGE}.json`)).default.pages
		.services
	return {
		locales
	}
}
