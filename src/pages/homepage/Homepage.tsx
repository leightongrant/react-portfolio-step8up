import Stack from 'react-bootstrap/Stack'

import './Homepage.css'

import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export const Homepage = () => {
	return (
		<Stack as='main'>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</Stack>
	)
}
