import './App.css'
import AppContent from './components/layout/content/AppContent'
import AppNavbar from './components/layout/AppNavbar'

function App() {
	return (
		<div className="flex flex-col items-center w-screen h-screen">
			<AppNavbar />
				<AppContent />
		</div>
	)
}

export default App
