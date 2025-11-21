import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

export const Header = () => {
	return (
		<Stack as='header'>
			<Navbar
				bg='dark'
				data-bs-theme='dark'
				expand='lg'
			>
				<Container fluid>
					<Navbar.Brand>
						<Link to='/'>LG</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbar-nav' />
					<Navbar.Collapse id='navbar-nav'>
						<Nav className='ms-auto'>
							<Link
								to='/'
								data-rr-ui-event-key='/'
								className='nav-link'
							>
								Home
							</Link>
							<Link
								to='about'
								data-rr-ui-event-key='about'
								className='nav-link'
							>
								About
							</Link>
							<Link
								to='projects'
								data-rr-ui-event-key='projects'
								className='nav-link'
							>
								Projects
							</Link>
							<Link
								to='contact'
								data-rr-ui-event-key='contact'
								className='nav-link'
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Stack>
	)
}
