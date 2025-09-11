import { useState, useEffect, useCallback } from 'react'
import { ModalHeader, ModalBody, ModalFooter, Button, Input, Textarea } from '@heroui/react'
import { FaPaperPlane } from 'react-icons/fa6'
import { sendContactEmail } from '../../../utils/email.utils'
import packageJson from '../../../../package.json'

type Props = {
	onClose: () => void
}

/**
 * ContactModal
 * - Encapsulates the contact form and its validation/sending logic.
 * - Uses an async helper (sendContactEmail) to send the mail.
 */
export default function ContactModal({ onClose }: Props) {
	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [isInvalidEmail, setIsInvalidEmail] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isButtonDisabled, setIsButtonDisabled] = useState(true)

	// Simple email validation
	const validateEmail = useCallback((value: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(value)
	}, [])

	useEffect(() => {
		const isFormComplete =
			name.trim() !== '' &&
			surname.trim() !== '' &&
			email.trim() !== '' &&
			message.trim() !== '' &&
			!isInvalidEmail

		setIsButtonDisabled(!isFormComplete || isSubmitting)
	}, [name, surname, email, message, isInvalidEmail, isSubmitting])

	const handleEmailBlur = useCallback(() => {
		setIsInvalidEmail(!validateEmail(email))
	}, [email, validateEmail])

	const resetForm = useCallback(() => {
		setName('')
		setSurname('')
		setEmail('')
		setMessage('')
		setIsInvalidEmail(false)
		setIsSubmitting(false)
	}, [])

	const handleSend = useCallback(async () => {
		setIsSubmitting(true)
		try {
			await sendContactEmail({
				app_name: packageJson.name,
				from_name: `${name} ${surname}`,
				from_email: email,
				from_message: message,
			})

			// close modal after success and reset form
			resetForm()
			onClose()
		} catch (err) {
			// In a real app, display a toast / inline error
			console.error('send email error', err)
			setIsSubmitting(false)
		}
	}, [name, surname, email, message, onClose, resetForm])

	return (
		<>
			<ModalHeader className="flex flex-col gap-1">Contact</ModalHeader>

			<ModalBody className="flex flex-col items-center justify-center pb-2 gap-4">
				<p className="text-center">
					Reach out with any questions, feedback, or collaboration opportunities. I will get back to you as
					soon as possible.
				</p>

				<div className="flex w-full justify-around gap-4">
					<Input isRequired label="Name" value={name} onValueChange={setName} />
					<Input isRequired label="Surname" value={surname} onValueChange={setSurname} />
				</div>

				<Input
					isRequired
					type="email"
					label="Email"
					className="w-full"
					value={email}
					onValueChange={setEmail}
					onBlur={handleEmailBlur}
					isInvalid={isInvalidEmail}
					errorMessage={isInvalidEmail ? 'Please enter a valid email' : ''}
				/>

				<Textarea
					isRequired
					label="Message"
					placeholder="Enter your message or inquiry"
					className="w-full"
					value={message}
					onValueChange={setMessage}
				/>
			</ModalBody>

			<ModalFooter className="flex justify-around items-center">
				<Button
					color="primary"
					isDisabled={isButtonDisabled}
					onPress={handleSend}
					variant="flat"
					startContent={<FaPaperPlane />}
				>
					{isSubmitting ? 'Sending...' : 'Send'}
				</Button>
			</ModalFooter>
		</>
	)
}
