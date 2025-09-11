// Handle table rounded corners css
export function getCellClasses(index: number, gridSize: number) {
	// Corners
	if (index === 0) return 'rounded-tl-[1.6rem]' // top-left corner
	if (index === gridSize - 1) return 'rounded-tr-[1.6rem]' // top-right corner
	if (index === gridSize * (gridSize - 1)) return 'rounded-bl-[1.6rem]' // bottom-left corner
	if (index === gridSize * gridSize - 1) return 'rounded-br-[1.6rem]' // bottom-right corner

	// Rest of cells
	return ''
}

// Math shuffle values in table
export function shuffle<T>(array: T[]): T[] {
	const result = [...array]
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[result[i], result[j]] = [result[j], result[i]]
	}
	return result
}

// Format time for finalTimer
export function formatTime(ms: number): string {
	const seconds = Math.floor(ms / 1000)
	const milliseconds = ms % 1000
	return `${seconds}.${milliseconds.toString().padStart(3, '0')}s`
}

// Manage audio sounds onclick
const correctAudio = new Audio('/sounds/pop.mp3')
const errorAudio = new Audio('/sounds/error.mp3')

export function playSound(type: 'correct' | 'error') {
	try {
		const audio = type === 'correct' ? correctAudio : errorAudio
		audio.currentTime = 0
		audio.volume = type === 'correct' ? 1 : 0.35
		audio.play()
	} catch (e) {
		console.warn('Error reproducing sound:', e)
	}
}
