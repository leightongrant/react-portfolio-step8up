import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

export const Footer = () => {
	return (
		<Stack className='site-footer-container bg-dark text-light'>
			<Container>
				<Row>
					<Col>&copy; Copyright 2025 | Leighton Grant</Col>
					<Col>
						<Row>
							<Col>LinkedIn</Col>
							<Col>GitHub</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Stack>
	)
}
