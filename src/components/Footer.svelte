<script lang="ts">
	import { page } from '$app/stores'
	import { DEFAULT_LANGUAGE } from 'CONSTANTS'
	import Linkedin from 'kudu-ui-system/src/icons/Linkedin.svelte'
	import Github from 'kudu-ui-system/src/icons/Github.svelte'
	import type { LocalesFooter } from '../types/locales-footer'

	export let locales: LocalesFooter

	const handleChangeLang = (event: Event) => {
		const selectedLang = (event.target as any).value as string
		const routePrefixLang = selectedLang === DEFAULT_LANGUAGE ? '' : selectedLang
		const pathname =
			'/' + routePrefixLang + ($page.params.lang ? $page.url.pathname.slice(4) : $page.url.pathname)
		window.location.href = pathname
	}
</script>

<footer>
	<div class="bg-primary md:p-16 py-8 px-6 text-center">
		<span class="text-base-100 font-bold md:text-2xl text-xl block text-center"
			>{locales.announcement.title}
		</span>
		<a class="btn btn-neutral btn-outline max-md:btn-sm md:mt-8 mt-5 rounded-full" href="/contact"
			>{locales.announcement.cta}
		</a>
	</div>
	<div class="bg-base-300 md:p-16 px-6 pt-9 pb-6 md:pb-8">
		<!-- <div class="flex justify-start max-md:flex-col md:pb-14 pb-8">
			<div class="flex justify-center items-center">
				<img src="../images/logo.png" alt="" class="aspect-auto md:w-16 w-0 md:h-16 h-0" />
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start md:mx-24 mx-0 md:mb-0 mb-8">
				<p class="text-sm text-primary-content">{locales.navigation.elements[0].title}</p>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[0].links[0]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[0].links[1]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[0].links[2]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[0].links[3]}</a>
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start md:mb-0 mb-4">
				<p class="text-sm text-primary-content">{locales.navigation.elements[1].title}</p>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[0]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[1]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[2]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[3]}</a>
			</div>
			<div
				class="flex flex-col justify-end md:space-y-6 space-y-4 items-start md:mx-24 mx-0 md:mb-0 mb-4"
			>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[4]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[5]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[6]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[7]}</a>
			</div>
			<div
				class="flex flex-col justify-end md:space-y-6 space-y-4 md:mr-24 mr-0 items-start md:mb-0 mb-8"
			>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[8]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[9]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[10]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[1].links[11]}</a>
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start">
				<p class="text-sm text-primary-content">{locales.navigation.elements[2].title}</p>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[2].links[0]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[2].links[1]}</a>
				<a class="text-base-200 text-sm" href="/">{locales.navigation.elements[2].links[2]}</a>
			</div>
		</div> -->
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<ul class="flex justify-center md:py-8 py-4 space-x-4 sh">
			<!-- <li>
				<a href="/" target="_blank" rel="noopener noreferrer" class="btn btn-square btn-ghost"
					><Twitter class="w-7 h-7" /></a
				>
			</li> -->
			<li>
				<a
					href="https://github.com/kudu-consultant"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-square btn-ghost child:w-7 child:h-7"><Github /></a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/company/kudu-consultant-llc"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-square btn-ghost child:w-7 child:h-7"><Linkedin /></a
				>
			</li>
			<!-- <li>
				<a href="/" target="_blank" rel="noopener noreferrer" class="btn btn-square btn-ghost"
					><Discord class="w-7 h-7" /></a
				>
			</li> -->
		</ul>
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<div class="flex md:items-center mt-8 md:space-x-8 max-md:flex-col-reverse">
			<address class="text-sm not-italic mr-auto child:whitespace-nowrap">
				{@html locales.copyright}
			</address>
			<ul class="md:flex md:shrink-0 md:items-center md:space-x-1 max-md:my-8 -ml-3">
				<li>
					<button class="md:px-1 btn-sm btn btn-link !no-underline"
						>{locales.buttonCookiesManagment}</button
					>
				</li>
				<div class="max-md:hidden">|</div>
				<li>
					<a class="md:px-1 btn btn-link btn-sm !no-underline" rel="bookmark" href="/terms-of-use"
						>{locales.terms}</a
					>
				</li>
				<div class="max-md:hidden">|</div>
				<li>
					<a class="md:px-1 btn btn-link btn-sm !no-underline" rel="bookmark" href="/privacy-policy"
						>{locales.privacyPolicy}</a
					>
				</li>
			</ul>
			<select
				class="select select-reverse select-bordered select-sm max-md:w-fit !rounded-full"
				on:change|preventDefault={handleChangeLang}
			>
				{#each locales.langs as lang}
					<option value={lang[0]}>{lang[1]}</option>
				{/each}
			</select>
		</div>
	</div>
</footer>