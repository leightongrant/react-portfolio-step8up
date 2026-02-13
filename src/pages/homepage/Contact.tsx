import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Contact = () => {
	return (
		<Stack className='contact-homepage-container  block-padding-large'>
			<Stack className='contact-homepage-content align-items-center'>
				<h2 className='contact-homepage-title text-center mb-5'>Contact Me</h2>
				<p>Real projects. Real code. Real growth</p>
				<p>Let's talk about what I've built and what we could build together.</p>

				<Link
					to='contact'
					className='contact-cta d-flex align-items-center btn btn-secondary gap-2 mt-4'
					type='button'
				>
					Contact Me <FaArrowRight />
				</Link>
			</Stack>
		</Stack>
	)
}

export default Contact
