import emailjs from 'emailjs-com'

/**
 * Email helper
 * - Wraps emailjs call in a single async function.
 * - Replace env placeholders with your actual service/template/user IDs — move them to env for production.
 */

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID ?? ''

type Payload = {
	from_name: string
	from_email: string
	from_message: string
}

export async function sendContactEmail(payload: Payload): Promise<void> {
	try {
		// emailjs returns a promise; use async/await for clarity
		await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID)
	} catch (err) {
		// bubble up the error to the caller to handle
		throw err
	}
}
