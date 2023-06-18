<script lang="ts">
	/* eslint-disable @typescript-eslint/no-explicit-any */
	import { env } from '$env/dynamic/public'
	import { validators } from 'utils'
	import { logger } from 'libs/logger'
	import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte'
	import FaTimesCircle from 'svelte-icons/fa/FaTimesCircle.svelte'
	import { page } from '$app/stores'
	import { DEFAULT_LANGUAGE } from 'CONSTANTS'

	export let form: {
		name: {
			value: string
			error: boolean
		}
		email: {
			value: string
			error: boolean
		}
		subject: {
			value: string
			error: boolean
		}
		message: {
			value: string
			error: boolean
		}
	}
	export let extraclass = ''
	export let locales: {
		labels: {
			name: string
			email: string
			subject: string
			message: string
		}
		recaptchaNode: string
		buttonSubmit: string
	}

	let formElement: HTMLFormElement | undefined

	let userStep: null | 'submiting' | 'success' | 'error' | 'validation' = null

	$: form = {
		name: {
			value: (formElement?.name as any)?.value ?? '',
			error: userStep === 'validation' ? !validators.isStringValid(form.name.value) : false
		},
		email: {
			value: formElement?.email?.value ?? '',
			error: userStep === 'validation' ? !validators.isEmailValid(form.email.value) : false
		},
		subject: {
			value: formElement?.subject.value ?? '',
			error: userStep === 'validation' ? !validators.isStringValid(form.subject.value) : false
		},
		message: {
			value: formElement?.message?.value ?? '',
			error: userStep === 'validation' ? !validators.isStringValid(form.message.value) : false
		}
	}

	const submitFunction = () => {
		userStep = 'submiting'

		form.name.error = !validators.isStringValid(form.name.value)
		form.email.error = !validators.isEmailValid(form.email.value)
		form.subject.error = !validators.isStringValid(form.subject.value)
		form.message.error = !validators.isStringValid(form.message.value)

		if (Object.keys(form).some(e => form[e as keyof typeof form].error))
			return (userStep = 'validation')
		;(window as any).grecaptcha.ready(async () => {
			try {
				const token = await (window as any).grecaptcha.execute(env.PUBLIC_RECAPTCHA_SITE_KEY, {
					action: 'submit'
				})
				const response = await fetch('/api/contact', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						token,
						lang: $page.params?.lang ?? DEFAULT_LANGUAGE,
						name: form.name.value,
						email: form.email.value,
						subject: form.subject.value,
						message: form.message.value
					})
				})
				if (response.ok) {
					userStep = 'success'
				} else {
					logger.trackError(new Error(''), 'fatal', await response.json())
					userStep = 'error'
				}
			} catch (error: any) {
				userStep = 'error'
				logger.trackError(error, 'fatal')
			}
		})
	}

	const classes = {
		label: 'text-base-300 text-xs block mb-2',
		input: 'input input-bordered mb-2 w-full',
		link: 'link link-primary'
	}
</script>

<form
	bind:this={formElement}
	on:submit|preventDefault={submitFunction}
	class={`relative overflow-hidden rounded-2xl bg-white ${extraclass}`}
>
	{#if userStep === 'success' || userStep === 'error'}
		<div class="absolute z-50 grid h-full w-full place-content-center bg-base-100 p-6">
			<div class="w-[448px] max-w-md text-center">
				<div
					class="mx-auto my-4 h-24 w-24"
					class:text-success={userStep === 'success'}
					class:text-error={userStep === 'error'}
				>
					{#if userStep === 'success'}
						<FaCheckCircle />
					{:else}
						<FaTimesCircle />
					{/if}
				</div>
				<span class="text-base text-base-300">
					{#if userStep === 'success'}
						Your submit is successfull
					{:else}
						Your submit has an error
					{/if}</span
				>
				{#if userStep === 'error'}
					<button
						class="btn-primary btn mx-auto mt-6 block"
						on:click={() => {
							userStep = null
						}}
					>
						Try Again
					</button>
				{/if}
			</div>
		</div>
	{/if}
	<div class="p-6">
		<label for="name" class={classes.label} class:text-error={form.name.error}
			>{locales.labels.name}</label
		>
		<input
			bind:value={form.name.value}
			disabled={!(userStep === null || userStep === 'validation')}
			type="text"
			id="name"
			name="name"
			class={classes.input}
			class:input-error={form.name.error}
		/>
		<label for="email" class={classes.label} class:text-error={form.email.error}
			>{locales.labels.email}</label
		>
		<input
			bind:value={form.email.value}
			disabled={!(userStep === null || userStep === 'validation')}
			type="text"
			id="email"
			name="email"
			class={classes.input}
			class:input-error={form.email.error}
		/>
		<label for="subject" class={classes.label} class:text-error={form.subject.error}
			>{locales.labels.subject}</label
		>
		<input
			bind:value={form.subject.value}
			disabled={!(userStep === null || userStep === 'validation')}
			type="text"
			id="subject"
			name="subject"
			class={classes.input}
			class:input-error={form.subject.error}
		/>
		<label for="message" class={classes.label} class:text-error={form.message.error}
			>{locales.labels.message}</label
		>
		<textarea
			bind:value={form.message.value}
			disabled={!(userStep === null || userStep === 'validation')}
			id="message"
			name="message"
			rows="2"
			class={`page-input !mb-0 !h-full resize-none py-3 ${classes.input}`}
			class:input-error={form.message.error}
		/>
		<span class="mt-4 block text-xs text-base-300">
			{@html locales.recaptchaNode
				.replace(
					'*LINK:privacy-policy*',
					`<a
					href="https://policies.google.com/privacy"
					class="${classes.link}"
					rel="noopener noreferrer"
					target="_blank"
					data-sveltekit-preload-data="off">`
				)
				.replace('*LINK*', `</a>`)
				.replace(
					'*LINK:terms*',
					`<a
					href="https://policies.google.com/terms"
					class="${classes.link}"
					rel="noopener noreferrer"
					target="_blank"
					data-sveltekit-preload-data="off">`
				)
				.replace('*LINK*', `</a>`)}
		</span>
		<button
			type="submit"
			class="btn-primary btn-block btn mt-4 !rounded-lg"
			disabled={!(userStep === null || userStep === 'validation')}>{locales.buttonSubmit}</button
		>
	</div>
</form>
