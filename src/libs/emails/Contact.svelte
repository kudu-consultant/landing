<script lang="ts">
	import { Hr, Html, Text } from 'svelte-email'

	export let name: string
	export let message: string
</script>

<Html lang="en">
	<Text>Message from the website contact form.</Text>
	<Hr />
	<Text>
		The user name is: {name}
	</Text>
	<Hr />
	<Text>This is the user message:</Text>
	<Hr />
	<Text>
		{message}
	</Text>
</Html>
