<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
	import ContactForm from 'components/ContactForm.svelte'
	import Recaptcha from 'components/Recaptcha.svelte'
	import type { PageData } from './$types'

	export let data: PageData
	const { locales } = data

	let form: any
	export const snapshot = {
		capture: () => form,
		restore: value => (form = value)
	}
</script>

<Recaptcha />

<section
	class="hero min-h-[calc(100vh-96px)] max-w-screen-2xl md:px-16 xs:px-6 px-4 md:pb-16 pb-4 pt-6 md:pt-24 @container"
>
	<div
		class="hero-content @3xl:grid block h-full w-full justify-start gap-0 @3xl:grid-cols-2 @3xl:justify-center @3xl:gap-6"
	>
		<div class="@3xl:h-full w-full @3xl:pt-24">
			<h1 class="max-w-3xl md:text-5xl text-2xl font-bold">{locales.title}</h1>
			<p class="max-w-2xl md:pt-6 pt-3 pb-6 md:text-lg text-base">
				{locales.subtitle}
			</p>
		</div>
		<ContactForm extraclass="3xl:mb-auto" locales={locales.form} bind:form />
	</div>
</section>
