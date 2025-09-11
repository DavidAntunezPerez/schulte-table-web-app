import { useState, useCallback } from 'react'
import {
	Button,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Modal,
	ModalContent,
	useDisclosure,
} from '@heroui/react'
import { FaCircleInfo } from 'react-icons/fa6'
import { AppLogo } from '../../../utils/logos.utils'
import AboutModal from './AboutModal'
import ContactModal from './ContactModal'
import packageJson from '../../../../package.json'
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '../../../global.constants'

// TODO: Add a section in about called "What is Schulte Table" to inform user
// TODO: Update README.md for this project

/**
 * AppNavbar
 * - Thin wrapper that manages which modal content to render.
 * - Keeps markup small and delegates heavy logic to AboutModal / ContactModal.
 */
export default function AppNavbar() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const [modalType, setModalType] = useState<'about' | 'contact'>('about')

	const openAbout = useCallback(() => {
		setModalType('about')
		onOpen()
	}, [onOpen])

	const openContact = useCallback(() => {
		setModalType('contact')
		onOpen()
	}, [onOpen])

	return (
		<>
			<Navbar maxWidth="full" className="bg-[#242424]">
				<NavbarBrand>
					<AppLogo width="48px" height="48px" />
					<p className="font-bold text-inherit">SCHULTE TABLE</p>
				</NavbarBrand>

				<NavbarContent justify="end">
					<NavbarItem className="flex">
						<Button color="primary" onPress={openContact} variant="light">
							Contact
						</Button>
					</NavbarItem>

					<NavbarItem>
						<Button color="primary" onPress={openAbout} variant="flat" startContent={<FaCircleInfo />}>
							About
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>

			{/* Single modal. ModalContent delegates rendering to the selected component. */}
			<Modal
				isOpen={isOpen}
				onOpenChange={() => {
					onOpenChange()
				}}
			>
				<ModalContent>
					{() =>
						modalType === 'about' ? (
							<AboutModal
								version={packageJson.version}
								linkedin={LINKEDIN_URL}
								github={GITHUB_URL}
								emailUrl={EMAIL_URL}
							/>
						) : (
							<ContactModal onClose={onOpenChange} />
						)
					}
				</ModalContent>
			</Modal>
		</>
	)
}
