export interface LocalesFooter {
	announcement: {
		title: string
		cta: string
	}
	navigation: {
		elements: [
			{
				title: string
				links: [string, string, string, string]
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
	copyright: string
	privacyPolicy: string
	terms: string
	buttonCookiesManagment: string
	langs: [string, string][]
}
