export default function getCellClasses(index: number, gridSize: number) {
	// Corners
	if (index === 0) return 'rounded-tl-[1.6rem]' // top-left corner
	if (index === gridSize - 1) return 'rounded-tr-[1.6rem]' // top-right corner
	if (index === gridSize * (gridSize - 1)) return 'rounded-bl-[1.6rem]' // bottom-left corner
	if (index === gridSize * gridSize - 1) return 'rounded-br-[1.6rem]' // bottom-right corner

	// Rest of cells
	return ''
}