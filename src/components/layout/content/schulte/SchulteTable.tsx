import { useState } from 'react'
import { getCellClasses, shuffle } from '../../../../utils/content.utils'
import { Button } from '@heroui/react'
import Confetti from 'react-confetti'

export default function SchulteCounter() {
	// TODOS: Add final card
	// TODOS: Add restart button
	// TODOS: Add click sounds

	const gridSize = 5
	const limitNumber = 25
	const [cells, setCells] = useState(() => {
		const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1)
		return shuffle(arr)
	})

	const [currentNumber, setCurrentNumber] = useState<number>(1)
	const [isFinished, setIsFinished] = useState(false)

	const handleRestart = () => {
		// reset number
		setCurrentNumber(1)
		setIsFinished(false)

		// shuffle new grid
		const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1)
		setCells(shuffle(arr))
	}

	return (
		<div className="flex flex-col justify-start pt-4 items-center w-full h-full p-4 gap-4">
			{isFinished && <Confetti width={window.innerWidth} height={window.innerHeight} />}
			<div className="w-full max-w-[70vmin] flex flex-col items-center justify-center">
				<span className="text-3xl uppercase">Current number:</span>
				<span className="text-[4rem] font-bold">{currentNumber}</span>
			</div>
			<div className="w-full h-full max-w-[70vmin] max-h-[70vmin] border-4 border-[#fafafa] bg-[#fafafa] rounded-[1.8rem] grid grid-cols-5 grid-rows-5 gap-1 overflow-hidden">
				{cells.map((num, i) => (
					<div
						key={num}
						className={`flex justify-center items-center cursor-pointer select-none active:scale-[0.92] transition-all duration-200 hover:bg-[#222] bg-[#2c2c2c] text-[#fafafa] font-bold aspect-square text-5xl ${getCellClasses(
							i,
							gridSize
						)}`}
						onClick={() => {
							if (num === limitNumber && currentNumber === limitNumber) {
								//TODO: Add custom modal to show results
								setIsFinished(true)
								console.log('Table finished')
							} else if (num === currentNumber) {
								setCurrentNumber(currentNumber + 1)
							}
						}}
					>
						{num}
					</div>
				))}
			</div>
			<Button variant="light" size="lg" radius="lg" className="text-[#fafafa] font-bold" onPress={handleRestart}>
				Restart
			</Button>
		</div>
	)
}
