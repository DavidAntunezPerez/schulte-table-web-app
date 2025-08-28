import './App.css'
import AppContent from './components/layout/AppContent'
import AppNavbar from './components/layout/AppNavbar'

function App() {
	return (
		<div className="flex flex-col items-center w-screen h-screen">
			<AppNavbar />
			<div className="flex items-center justify-center w-full h-full">
				<AppContent />
			</div>
		</div>
	)
}

export default App
