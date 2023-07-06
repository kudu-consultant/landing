import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from 'CONSTANTS'
import type { LocalesHeader } from '../../types/locales-header'
import type { LocalesMetadata } from '../../types/locales-metadata'
import type { LocalesFooter } from '../../types/locales-footer'

export const load: LayoutServerLoad = async ({ cookies, params, url }) => {
	const isFirstVisit = cookies.get('is-first-visit') === undefined

	if (isFirstVisit) {
		cookies.set('is-first-visit', 'false')
		const prefixLang = cookies.get('preferred-lang') ?? ''
		const path = '/' + (url.pathname.split('/')?.[params.lang ? 2 : 1] ?? '')
		const pathToRedirect = prefixLang === 'en' ? path : prefixLang + path
		throw redirect(303, pathToRedirect)
	}

	if (params.lang && !SUPPORTED_LANGUAGES.includes(params.lang)) {
		const prefixLang = cookies.get('preferred-lang') ?? ''
		throw redirect(303, prefixLang === DEFAULT_LANGUAGE ? '/' : '/' + prefixLang)
	}

	const locales: {
		metadata: LocalesMetadata
		header: LocalesHeader
		footer: LocalesFooter
	} = (await import(`../../locales/${params.lang ?? DEFAULT_LANGUAGE}.json`)).default.layout
	return {
		locales
	}
}

export const prerender = false
