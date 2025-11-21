import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { ContactForm } from '../components/ContactForm'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'

export const ContactPage = () => {
	return (
		<Stack
			as='main'
			className='justify-content-center block-padding-large'
		>
			<Container>
				<Row gap={3}>
					<Col
						md={12}
						lg={6}
						className='px-5'
					>
						<Stack>
							<h2 className='mb-5'>Send A Message</h2>
							<ContactForm />
						</Stack>
					</Col>

					<Col
						md={12}
						lg={6}
						className='px-5'
					>
						<Stack className='gap-4 mt-5 mt-lg-0'>
							<h2 className='mb-4'>Other Ways to get in touch</h2>
							<Stack
								direction='horizontal'
								className='gap-2'
							>
								<FaGithub className='fs-3' /> <a href='https://github.com/leightongrant'>github.com/leightongrant</a>
							</Stack>
							<Stack
								direction='horizontal'
								className='gap-2'
							>
								<FaLinkedin className='fs-3' /> <a href='https://www.linkedin.com/in/leightongrant/'>linkedin.com/in/leightongrant</a>
							</Stack>
							<Stack
								direction='horizontal'
								className='gap-2'
							>
								<MdEmail className='fs-3' /> <a href='mailto:dev@leightongrant.me'>dev@leightongrant.me</a>
							</Stack>
							<Stack
								direction='horizontal'
								className='gap-2'
							>
								<FaPhone className='fs-3' /> <a href='tel:+447886028826'>+447886028826</a>
							</Stack>
						</Stack>
					</Col>
				</Row>
			</Container>
		</Stack>
	)
}
