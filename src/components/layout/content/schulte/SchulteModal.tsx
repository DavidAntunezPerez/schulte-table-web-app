import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react'

type SchulteModalProps = {
	onRestart: () => void
	finalTime: string | null
}

export default function SchulteModal({ onRestart, finalTime }: SchulteModalProps) {
	return (
		<ModalContent>
			{(onClose) => (
				<>
					<ModalHeader className="flex flex-col gap-1">Results</ModalHeader>
					<ModalBody className="flex flex-col gap-4 items-center justify-center">
						<p className="text-xl font-semibold">🎉 You have completed the table!</p>
						{finalTime && <p className="text-2xl font-bold">Completion time: {finalTime}</p>}
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
