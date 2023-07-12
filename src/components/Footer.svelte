<script lang="ts">
	import { page } from '$app/stores'
	import { DEFAULT_LANGUAGE } from 'CONSTANTS'
	import type { LocalesFooter } from '../types'
	import { Github, LinkedIn, Discord, Twitter } from 'kudu-components/icons'

	export let locales: LocalesFooter

	$: routePrefixLang = $page.params.lang ? '/' + $page.url.pathname.split('/')[1] : ''

	const handleChangeLang = (event: Event) => {
		const selectedLang = (event.target as HTMLSelectElement).value as string
		const routePrefixLang = selectedLang === DEFAULT_LANGUAGE ? '' : selectedLang
		const pathname =
			'/' + routePrefixLang + ($page.params.lang ? $page.url.pathname.slice(4) : $page.url.pathname)
		window.location.href = pathname
	}
</script>

<footer class="max-w-screen-2xl mx-auto">
	<div class="bg-primary md:p-16 py-8 px-6 text-center">
		<span class="text-base-100 font-bold md:text-2xl text-xl block text-center"
			>{locales.announcement.title}
		</span>
		<a
			class="btn btn-neutral btn-outline max-md:btn-sm md:mt-8 mt-5 rounded-full"
			href={routePrefixLang + '/contact'}
			>{locales.announcement.cta}
		</a>
	</div>
	<div class="bg-base-300 md:p-16 px-6 pt-9 pb-6 md:pb-8">
		<ul
			class="xl:grid xl:grid-cols-[auto,auto,auto,auto] xl:gap-x-8 md:mb-14 mb-8 max-xl:space-y-4 xl:h-52 max-xl:w-[1126px] max-xl:max-w-full"
		>
			<li class="grid place-content-center w-52 h-52 max-xl:hidden">
				<img
					src="../images/logo.png"
					alt={locales.navigation.logo.alt}
					class="aspect-1/1 w-full h-full"
				/>
			</li>
			{#each locales.navigation.elements as element}
				<li>
					<ul class="h-full flex flex-col">
						<span class="text-sm font-bold mb-2">{element.title}</span>
						<div
							class="h-full grid max-xl:grid-rows-1 xl:grid-rows-4 max-xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:grid-flow-col-dense gap-x-8"
						>
							{#each element.links as link}
								<li class="xl:mt-auto">
									<a
										class="btn btn-link text-left whitespace-nowrap !no-underline btn-sm -ml-3 !text-base-200 hover:!text-base-100"
										class:cursor-default={link[0] === ''}
										class:!opacity-50={link[0] === ''}
										class:hover:!text-base-200={link[0] === ''}
										href={link[0] === '' ? null : routePrefixLang + link[0]}>{link[1]}</a
									>
								</li>
							{/each}
						</div>
					</ul>
				</li>
			{/each}
		</ul>
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<ul class="flex justify-center md:py-8 py-4 space-x-4 sh">
			<li>
				<a
					href="https://www.linkedin.com/company/kudu-consultant-llc"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-square btn-ghost child:w-7 child:h-7"><LinkedIn /></a
				>
			</li>
			<li>
				<div
					class="btn btn-square btn-ghost child:w-7 child:h-7 !opacity-50 !bg-transparent cursor-default"
				>
					<Twitter />
				</div>
			</li>
			<li>
				<div
					class="btn btn-square btn-ghost child:w-7 child:h-7 !opacity-50 !bg-transparent cursor-default"
				>
					<Discord />
				</div>
			</li>
			<li>
				<a
					href="https://github.com/kudu-consultant"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-square btn-ghost child:w-7 child:h-7"><Github /></a
				>
			</li>
		</ul>
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<div class="flex md:items-center mt-8 md:space-x-8 max-md:flex-col-reverse">
			<address class="text-sm not-italic mr-auto child:whitespace-nowrap">
				{@html locales.copyright}
			</address>
			<ul class="md:flex md:shrink-0 md:items-center md:space-x-1 max-md:my-8 -ml-3">
				<li>
					<button class="md:px-1 btn-sm btn btn-link !no-underline max-md:w-fit"
						>{locales.buttonCookiesManagment}</button
					>
				</li>
				<div class="max-md:hidden">|</div>
				<li>
					<a
						class="md:px-1 btn btn-link btn-sm !no-underline max-md:w-fit"
						rel="bookmark"
						href={routePrefixLang + '/terms-of-use'}>{locales.terms}</a
					>
				</li>
				<div class="max-md:hidden">|</div>
				<li>
					<a
						class="md:px-1 btn btn-link btn-sm !no-underline max-md:w-fit"
						rel="bookmark"
						href={routePrefixLang + '/privacy-policy'}>{locales.privacyPolicy}</a
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
