import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const Hero = () => {
	return (
		<Stack
			className='hero-container'
			as='section'
		>
			<Stack className='hero-overlay'>
				<Stack className='hero-content gap-4'>
					<span className='hero-title text-center fw-bold display-3'>Welcome To My Portfolio</span>
					<span className='hero-subtitle text-center display-3 fs-4'>Learning, building, and refining... one project at a time</span>
					<Link
						to='contact'
						className='hero-cta d-flex align-items-center btn btn-outline-dark gap-2'
						type='button'
					>
						Get In Touch <FaArrowRight />
					</Link>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Hero
