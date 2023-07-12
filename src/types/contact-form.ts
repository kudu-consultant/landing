export interface ContactForm {
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
