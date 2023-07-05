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
		<!-- <div class="flex justify-start mr-72">
			<div class="flex flex-col justify-center">
				<img src="../images/logo.png" alt="" class="aspect-1/1 w-16" />
			</div>
			<div class="flex flex-col gap-4 items-start mx-24">
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
		</div> -->
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
		<!-- <div class="flex justify-between items-center pb-4">
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
					<option class="text-xs" value="englis">English</option>
					<option class="text-xs" value="spanish">Spanish</option>
				</select>
			</div>
		</div> -->
	</div>
</footer>
