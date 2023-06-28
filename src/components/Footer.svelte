<script lang="ts">
	import { Discord, Github, Twitter, Linkedin } from 'svelte-bootstrap-icons'
</script>

<footer class="absolute bottom-0 left-0 w-full text-center">
	<div class="bg-primary py-8 flex flex-col gap-4">
		<p class="mtext-s text-base-100 font-bold">We're building the future.</p>
		<a
			class="text-xs btn-primary border-white md:btn-md btn-sm btn w-fit place-self-end self-center min-w-max text-base-100"
			href="/">Let's build together</a
		>
	</div>
	<div class="bg-base-300 flex flex-col">
		<div class="flex justify-start gap-16 py-8 ml-14">
			<div class="flex flex-col justify-center">
				<img src="../images/logo.png" alt="" class="aspect-1/1 w-16" />
			</div>
			<div class="flex flex-col gap-4 items-start">
				<p class="text-sm text-primary-content">Company</p>
				<a class="text-base-200 text-xs" href="/">Home</a>
				<a class="text-base-200 text-xs" href="/">Capabilies</a>
				<a class="text-base-200 text-xs" href="/">Web 3</a>
				<a class="text-base-200 text-xs" href="/">About us</a>
			</div>
			<div class="flex flex-col gap-4 items-start">
				<p class="text-sm text-primary-content">Services</p>
				<a class="text-base-200 text-xs" href="/">UX/UI desing</a>
				<a class="text-base-200 text-xs" href="/">Web development</a>
				<a class="text-base-200 text-xs" href="/">Movile development</a>
				<a class="text-base-200 text-xs" href="/">Technical consulting</a>
			</div>
			<div class="flex flex-col justify-end gap-4 items-start">
				<a class="text-base-200 text-xs" href="/">Custom corporate web</a>
				<a class="text-base-200 text-xs" href="/">Tracker integrations</a>
				<a class="text-base-200 text-xs" href="/">Web3 adoption consulting</a>
				<a class="text-base-200 text-xs" href="/">Web3 tools integrations</a>
			</div>
			<div class="flex flex-col justify-end gap-4 items-start">
				<a class="text-base-200 text-xs" href="/">Web3 protocol development</a>
				<a class="text-base-200 text-xs" href="/">Smart contracts development</a>
				<a class="text-base-200 text-xs" href="/">NFTs solutions</a>
				<a class="text-base-200 text-xs" href="/">Web3 adits</a>
			</div>
			<div class="flex flex-col gap-4 items-start">
				<p class="text-sm text-primary-content">Products</p>
				<a class="text-base-200 text-xs" href="/">Kudu pay</a>
				<a class="text-base-200 text-xs" href="/">Wallet Kudu</a>
				<a class="text-base-200 text-xs" href="/">Second Hand</a>
			</div>
		</div>
		<div class="border border-base-200 mx-12 my-2" />
		<div class="flex justify-center center;">
			<a href="/" class="w-12 h-12 px-3 block"> <Twitter class="w-full h-full" /></a>
			<a href="/" class="w-12 h-12 px-3 block"> <Github class="w-full h-full" /></a>
			<a href="/" class="w-12 h-12 px-3 block"> <Linkedin class="w-full h-full" /></a>
			<a href="/" class="w-12 h-12 px-3 block"> <Discord class="w-full h-full" /> </a>
		</div>
		<div class="border border-base-200 mx-12 mb-4 mt-2" />
		<div class="flex justify-between items-center pb-4">
			<p class="mx-12 text-xs">Copyright © 2023, Kudu Consultant LLC</p>
			<div class="mx-12 flex align-middle items-center">
				<a class=" px-1 text-xs text-primary-content" href="/">Cookie Management</a>
				<div class="h-3 border-l border-white" />
				<a class=" px-1 text-xs text-primary-content" href="/">Privacy Policy</a>
				<div class="h-3 border-l border-white" />
				<a class=" px-1 text-xs text-primary-content" href="/">Terms of Use</a>
				<select
					class="bg-base-300 rounded-xl border-white border p-1 text-xs ml-2 flex justify-center"
				>
					<option class="text-xs" value="englis">Englis</option>
					<option class="text-xs" value="spanish">Spanish</option>
				</select>
			</div>
		</div>
	</div>
</footer>
