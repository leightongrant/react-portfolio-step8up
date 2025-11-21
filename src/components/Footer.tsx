import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'

export const Footer = () => {
	return (
		<Stack
			as='footer'
			className='site-footer-container bg-dark text-light block-padding-small'
		>
			<Container className='flex-grow-1'>
				<Stack
					direction='horizontal'
					className='flex-wrap gap-3'
				>
					<Stack
						direction='horizontal'
						className='justify-content-center justify-content-md-start flex-grow-1 text-secondary'
					>
						&copy; Copyright 2025 | Leighton Grant
					</Stack>
					<Stack
						direction='horizontal'
						className='justify-content-center justify-content-md-end gap-3 flex-grow-1'
					>
						<a href='https://github.com/leightongrant'>
							<FaGithub className='fs-4 text-secondary' />
						</a>
						<a href='https://www.linkedin.com/in/leightongrant/'>
							<FaLinkedin className='fs-4 text-secondary' />
						</a>
						<a href='mailto:dev@leightongrant.me'>
							<MdEmail className='fs-4 text-secondary' />
						</a>
						<a href='tel:+447886028826'>
							<FaPhone className='fs-4 text-secondary' />
						</a>
					</Stack>
				</Stack>
			</Container>
		</Stack>
	)
}
