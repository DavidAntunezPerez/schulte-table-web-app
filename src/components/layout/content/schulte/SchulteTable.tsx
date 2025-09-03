import { useMemo, useState } from 'react'
import { getCellClasses, shuffle } from '../../../../utils/content.utils'

export default function SchulteCounter() {
	const gridSize = 5
	const limitNumber = 25
	const cells = useMemo(() => {
		const arr = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1)
		return shuffle(arr)
	}, [gridSize])

	const [currentNumber, setCurrentNumber] = useState<number>(1)

	return (
		<div className="flex flex-col justify-start pt-4 items-center w-full h-full p-4 gap-4">
			<div className="flex flex-col items-center justify-center text-3xl uppercase">
				<span>Current number:</span> <span className="text-[4rem] font-bold">{currentNumber}</span>{' '}
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
		</div>
	)
}
