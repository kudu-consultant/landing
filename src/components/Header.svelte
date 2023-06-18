<script lang="ts">
	import { beforeNavigate } from '$app/navigation'
	import { page } from '$app/stores'
	import { onMount } from 'svelte'
	import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte'
	import { fly } from 'svelte/transition'

	export let locales: {
		navElements: {
			home: string
			services: string
			web3: string
			about: string
		}
		cta: string
	}

	let showMenu = false

	$: routePrefixLang = $page.params.lang ? '/' + $page.url.pathname.split('/')[1] : ''
	$: segment = '/' + ($page.url.pathname.split('/')[$page.params.lang ? 2 : 1] ?? '')

	const toggleMenu = () => (showMenu = !showMenu)

	beforeNavigate(() => (showMenu = false))

	onMount(() => {
		const onResize = () => {
			if (window.innerWidth > 768) showMenu = false
		}
		const resizeObserver = new ResizeObserver(onResize)
		resizeObserver.observe(document.body)
		return () => {
			resizeObserver.disconnect()
		}
	})
</script>

<header class="mx-auto max-w-screen-2xl md:px-24 xs:px-6 px-4">
	<nav
		class="grid md:h-24 h-16 md:grid-cols-[1fr,max-content,1fr] grid-cols-[1fr,max-content,max-content]"
	>
		<a href={routePrefixLang === '' ? '/' : routePrefixLang} class="flex md:w-24 w-16 md:p-4 p-3">
			<img src="../images/logo.png" alt="" class="aspect-1/1" />
		</a>
		{#key showMenu}
			<ul
				class="grid w-fit md:grid-cols-[max-content,max-content,max-content,max-content] md:px-4 md:grid max-md:absolute
		max-md:bg-base-300 max-md:translate-y-16 max-md:w-full max-md:xs:-ml-6 max-md:-ml-4 max-md:z-50 max-md:h-[calc(100%-64px)]
		max-md:grid-rows-[max-content,max-content,max-content,max-content]"
				class:max-md:hidden={!showMenu}
				transition:fly={{ duration: 300 }}
			>
				{#each [['/', locales.navElements.home], ['/services', locales.navElements.services], ['/web3', locales.navElements.web3], ['/about', locales.navElements.about]] as element}
					<a
						href={routePrefixLang + element[0]}
						class="btn-link btn h-fit w-fit self-center duration-300 max-md:btn-block !no-underline"
						class:md:translate-y-1={segment === element[0]}
						class:md:!text-base-200={segment === element[0]}
						class:max-md:!text-primary={segment === element[0]}
					>
						<li>{element[1]}</li>
					</a>
				{/each}
			</ul>
		{/key}

		<a
			href={routePrefixLang + '/contact'}
			class="btn-primary md:btn-md btn-sm btn mr-4 w-fit place-self-end self-center min-w-max"
			>{locales.cta}</a
		>
		<button
			class="place-self-end self-center p-0.5 md:hidden btn btn-ghost btn-square"
			on:click|preventDefault={toggleMenu}><IoMdMenu /></button
		>
	</nav>
</header>
