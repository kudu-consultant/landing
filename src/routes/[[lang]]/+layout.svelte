<script lang="ts">
	import { Header, Footer } from 'components'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	const { locales } = data
</script>

<svelte:head>
	<title>{locales.metadata.title}</title>
	<meta name="description" content={locales.metadata.description} />
</svelte:head>

<Header locales={locales.header} />
<slot />
<Footer locales={locales.footer} />
