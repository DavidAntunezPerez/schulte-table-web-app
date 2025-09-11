import { ModalHeader, ModalBody, ModalFooter, Button } from '@heroui/react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '../../../global.constants'
import packageJson from '../../../../package.json'

/**
 * AboutModal
 * - Presentational component for "About this project".
 * - Pure and easy to test.
 */
export default function AboutModal() {
	return (
		<>
			<ModalHeader className="flex flex-col gap-1">About this project</ModalHeader>
			<ModalBody className="flex items-center justify-center pb-2">
				<div className="text-center space-y-2">
					<p>
						This project was made by <span className="font-bold">David Antúnez Pérez</span>
					</p>
					<p>Please, support it by dropping a star on the repository and following me on socials.</p>
					<p className="text-sm opacity-50">Version {packageJson.version}</p>
				</div>
			</ModalBody>

			<ModalFooter className="flex justify-around items-center">
				<Button
					as="a"
					href={EMAIL_URL}
					isIconOnly
					size="md"
					color="default"
					aria-label="Mail"
					target="_blank"
					rel="noreferrer"
				>
					<TbMailFilled size={20} />
				</Button>

				<Button
					as="a"
					href={LINKEDIN_URL}
					isIconOnly
					size="md"
					color="primary"
					aria-label="LinkedIn"
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedinIn size={20} />
				</Button>

				<Button
					as="a"
					href={GITHUB_URL}
					isIconOnly
					size="md"
					color="default"
					variant="ghost"
					aria-label="Github"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub size={20} />
				</Button>
			</ModalFooter>
		</>
	)
}
