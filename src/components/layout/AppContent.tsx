import getCellClasses from '../../utils/content.utils'

export default function AppContent() {
	const gridSize = 5
	const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i + 1).sort(() => Math.random() - 0.5)

	return (
		<div className="flex justify-center items-center w-full h-full p-4">
			<div className="w-full h-full max-w-[70vmin] max-h-[70vmin] border-4 border-[#fafafa] bg-[#fafafa] rounded-[1.8rem] grid grid-cols-5 grid-rows-5 gap-1 overflow-hidden">
				{cells.map((num, i) => (
					<div
						key={num}
						className={`flex justify-center items-center cursor-pointer select-none hover:bg-[#222] bg-[#2c2c2c] text-[#fafafa] font-bold aspect-square text-5xl ${getCellClasses(
							i,
							gridSize
						)}`}
					>
						{num}
					</div>
				))}
			</div>
		</div>
	)
}
