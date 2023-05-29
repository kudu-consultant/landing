/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/27`
 *
 * @description
 * Check if a string is not empty and valid.
 *
 * @param inputString - The string to validate.
 * @returns A boolean indicating if the string is valid.
 */
export const isStringValid = (inputString: any) => {
	// Check if the input is a string
	if (typeof inputString !== 'string') return false

	// Check if the string is empty
	if (inputString.trim().length === 0) return false
	// If all validations pass, return true
	return true
}

/**
 * @author Ventu Rodriguez <ventu@kudu.design> `2023/05/27`
 *
 * @description
 * Checks if an email address is valid.
 * The regular expression checks if the email has the basic structure of `<username>@<domain>.<tld>`
 *
 * @param email - The email address to validate.
 * @returns A boolean indicating if the email is valid.
 */
export const isEmailValid = (email: any) => {
	if (!isStringValid(email)) return false

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false

	return true
}
