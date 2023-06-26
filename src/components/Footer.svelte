<script lang="ts">
	import { page } from '$app/stores'
	import { Discord } from 'svelte-bootstrap-icons'
	$: routePrefixLang = $page.params.lang ? '/' + $page.url.pathname.split('/')[1] : ''
</script>

<footer class="absolute bottom-0 left-0 w-full py-4 text-center">
	<div class="bg-primary">
		<p>We're building the future.</p>
		<a
			class="btn-primary md:btn-md btn-sm btn mr-4 w-fit place-self-end self-center min-w-max"
			href="/">Let's build together</a
		>
	</div>
	<div>
		<div class="flex justify-around pt-5">
			<div class="flex flex-col justify-center">
				<img src="../images/logo.png" alt="" class="aspect-1/1" />
			</div>
			<div class="flex flex-col gap-3">
				<p class="text-sm font-bold">Company</p>
				<a class="text-xs" href="/">Home</a>
				<a class="text-xs" href="/">Capabilies</a>
				<a class="text-xs" href="/">Web 3</a>
				<a class="text-xs" href="/">About us</a>
			</div>
			<div class="flex flex-col gap-3">
				<p class="text-sm font-bold">Services</p>
				<a class="text-xs" href="/">UX/UI desing</a>
				<a class="text-xs" href="/">Web development</a>
				<a class="text-xs" href="/">Movile development</a>
				<a class="text-xs" href="/">Technical consulting</a>
			</div>
			<div class="flex flex-col justify-end gap-3">
				<a class="text-xs" href="/">Custom corporate web</a>
				<a class="text-xs" href="/">Tracker integrations</a>
				<a class="text-xs" href="/">Web3 adoption consulting</a>
				<a class="text-xs" href="/">Web3 tools integrations</a>
			</div>
			<div class="flex flex-col justify-end gap-3">
				<a class="text-xs" href="/">Web3 protocol development</a>
				<a class="text-xs" href="/">Smart contracts development</a>
				<a class="text-xs" href="/">NFTs solutions</a>
				<a class="text-xs" href="/">Web3 adits</a>
			</div>
			<div class="flex flex-col gap-3">
				<p class="text-sm font-bold">Products</p>
				<a class="text-xs" href="/">Kudu pay</a>
				<a class="text-xs" href="/">Wallet Kudu</a>
				<a class="text-xs" href="/">Second Hand</a>
			</div>
		</div>
		<div class="border border-grey-300 mx-12 my-4" />
		<div>
			<a href="/" class="w-12 h-12 block"> <Discord class="w-full h-full" /></a>
			<a href="/">hola</a>
			<a href="/">hola</a>
			<a href="/">
				<!-- <img src="" alt="" /> -->
			</a>
		</div>
		<div class="border border-grey-300 mx-8 my-4" />
		<div>bottom</div>
	</div>
</footer>
