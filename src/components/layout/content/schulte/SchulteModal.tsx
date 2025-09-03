import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'

type SchulteModalProps = {
	onRestart: () => void
}

export default function SchulteModal({ onRestart }: SchulteModalProps) {
	return (
		<ModalContent>
			{(onClose) => (
				<>
					<ModalHeader className="flex flex-col gap-1">Results</ModalHeader>
					<ModalBody>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
							hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus
							hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
						</p>
						<p>
							Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
							adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
							eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur
							esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
						</p>
					</ModalBody>
					<ModalFooter className="flex items-center justify-center">
						<Button
							color="primary"
							variant="flat"
							onPress={() => {
								onRestart()
								onClose()
							}}
						>
							Restart
						</Button>
					</ModalFooter>
				</>
			)}
		</ModalContent>
	)
}
