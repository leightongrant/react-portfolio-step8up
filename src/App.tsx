import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { ProjectsPage } from './pages/Projects'

function App() {
	return (
		<Layout>
			<Routes>
				<Route
					index
					path='/'
					element={<Homepage />}
				/>
				<Route
					path='/projects'
					element={<ProjectsPage />}
				/>
			</Routes>
		</Layout>
	)
}

export default App
