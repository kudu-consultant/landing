<script>
	import { env } from '$env/dynamic/public'
</script>

<svelte:head>
	<script
		src="https://www.google.com/recaptcha/api.js?render={env.PUBLIC_RECAPTCHA_SITE_KEY}"
		async
		defer
	></script>
</svelte:head>
