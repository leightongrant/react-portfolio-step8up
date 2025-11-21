import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { ProjectsPage } from './pages/Projects'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { PageBanner } from './components/PageBanner'
import { useLocation } from 'react-router-dom'
import { ProjectDetails } from './components/ProjectDetails'
import { PageNotFound } from './components/PageNotFound'

function App() {
	const { pathname } = useLocation()
	return (
		<Layout>
			{pathname !== '/' && <PageBanner />}
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
				<Route
					path='/projects/:id'
					element={<ProjectDetails />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/contact'
					element={<ContactPage />}
				/>
				<Route
					path='*'
					element={<PageNotFound />}
				/>
			</Routes>
		</Layout>
	)
}

export default App
