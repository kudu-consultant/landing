<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
	const { locales } = data
</script>

<section
	class="hero min-h-[calc(100vh-96px)] max-w-screen-2xl mx-auto md:px-16 xs:px-6 px-4 md:pb-16 pb-4 pt-6 md:pt-24"
>
	<div class="hero-content h-full w-full">
		<div class="h-full w-full">
			<h1 class="max-w-3xl md:text-5xl text-2xl font-bold">
				{locales.title}
			</h1>
			<p class="max-w-2xl md:pt-6 pt-3 md:text-lg text-base">
				{locales.subtitle}
			</p>
		</div>
	</div>
</section>
