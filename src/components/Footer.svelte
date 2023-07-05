<script lang="ts">
	import { Discord, Github, Twitter, Linkedin } from 'svelte-bootstrap-icons'

	export let locales: {
		announcement: {
			title: string
			cta: string
		}
		navigation: {
			elements: [
				{
					title: string
					link: [string, string, string, string]
				},
				{
					title: string
					links: [
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string,
						string
					]
				},
				{
					title: string
					links: [string, string, string, string]
				}
			]
		}
		licenses: {
			links: [string, string, string, string, string]
			button: [string, string]
		}
	}
</script>

<footer>
	<div class="bg-primary md:p-16 py-8 px-6 text-center">
		<span class="text-base-100 font-bold md:text-2xl text-xl block text-center"
			>{locales.announcement.title}
		</span>
		<a class="btn btn-neutral btn-outline max-md:btn-sm md:mt-8 mt-5" href="/contact"
			>{locales.announcement.cta}
		</a>
	</div>
	<div class="bg-base-300 md:p-16 px-6 pt-9 pb-6 md:pb-8">
		<div class="flex justify-start max-md:flex-col md:pb-14 pb-8">
			<div class="flex justify-center items-center">
				<img src="../images/logo.png" alt="" class="aspect-auto md:w-16 w-0 md:h-16 h-0" />
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start md:mx-24 mx-0 md:mb-0 mb-8">
				<p class="text-sm text-primary-content">Company</p>
				<a class="text-base-200 text-sm" href="/">Home</a>
				<a class="text-base-200 text-sm" href="/">Capabilies</a>
				<a class="text-base-200 text-sm" href="/">Web 3</a>
				<a class="text-base-200 text-sm" href="/">About us</a>
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start md:mb-0 mb-4">
				<p class="text-sm text-primary-content">Services</p>
				<a class="text-base-200 text-sm" href="/">UX/UI desing</a>
				<a class="text-base-200 text-sm" href="/">Web development</a>
				<a class="text-base-200 text-sm" href="/">Movile development</a>
				<a class="text-base-200 text-sm" href="/">Technical consulting</a>
			</div>
			<div
				class="flex flex-col justify-end md:space-y-6 space-y-4 items-start md:mx-24 mx-0 md:mb-0 mb-4"
			>
				<a class="text-base-200 text-sm" href="/">Custom corporate web</a>
				<a class="text-base-200 text-sm" href="/">Tracker integrations</a>
				<a class="text-base-200 text-sm" href="/">Web3 adoption consulting</a>
				<a class="text-base-200 text-sm" href="/">Web3 tools integrations</a>
			</div>
			<div
				class="flex flex-col justify-end md:space-y-6 space-y-4 md:mr-24 mr-0 items-start md:mb-0 mb-8"
			>
				<a class="text-base-200 text-sm" href="/">Web3 protocol development</a>
				<a class="text-base-200 text-sm" href="/">Smart contracts development</a>
				<a class="text-base-200 text-sm" href="/">NFTs solutions</a>
				<a class="text-base-200 text-sm" href="/">Web3 adits</a>
			</div>
			<div class="flex flex-col md:space-y-6 space-y-4 items-start">
				<p class="text-sm text-primary-content">Products</p>
				<a class="text-base-200 text-sm" href="/">Kudu pay</a>
				<a class="text-base-200 text-sm" href="/">Wallet Kudu</a>
				<a class="text-base-200 text-sm" href="/">Second Hand</a>
			</div>
		</div>
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<ul class="flex justify-center md:py-8 py-4 space-x-4">
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
					class="btn btn-square btn-ghost"><Github class="w-7 h-7" /></a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/company/kudu-consultant-llc"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-square btn-ghost"><Linkedin class="w-7 h-7" /></a
				>
			</li>
			<!-- <li>
				<a href="/" target="_blank" rel="noopener noreferrer" class="btn btn-square btn-ghost"
					><Discord class="w-7 h-7" /></a
				>
			</li> -->
		</ul>
		<div class="divider max-xs:w-screen max-xs:!-ml-6" />
		<div
			class="flex md:justify-between md:items-center md:pt-8 max-md:flex-col-reverse max-md:mt-8 max-md:justify-start"
		>
			<p class="max-md:mt-8 text-sm">Copyright © 2023, Kudu Consultant LLC</p>
			<div class="flex align-middle md:items-center max-md:flex-col-reverse">
				<a class="px-1 text-sm text-primary-content" href="/">Cookie Management</a>
				<div class="md:h-3 h-0 border-l border-white" />
				<a class="px-1 text-sm text-primary-content max-md:my-4" href="/">Privacy Policy</a>
				<div class="md:h-3 h-0 border-l border-white" />
				<a class="px-1 text-sm text-primary-content" href="/">Terms of Use</a>
				<select
					class="bg-base-300 rounded-xl border-white border p-1 text-sm flex justify-center md:ml-8 max-md:mb-8 max-md: w-20"
				>
					<option class="text-sm" value="englis">English</option>
					<option class="text-sm" value="spanish">Spanish</option>
				</select>
			</div>
		</div>
	</div>
</footer>
