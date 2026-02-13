import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import profileImage from '../../assets/images/profile-img.webp'

const About = () => {
	return (
		<Stack
			className='about-homepage-container block-padding-large'
			as='section'
		>
			<Container className='about-homepage-content'>
				<Row>
					<Col
						xs={12}
						md={3}
					>
						<Image
							src={profileImage}
							alt='Profile image of Leighton Grant'
							className='rounded'
							fluid
						/>
					</Col>
					<Col
						xs={12}
						md={9}
					>
						<Stack>
							<h2>Hi, I'm Leighton Grant</h2>
							<p>
								As an aspiring Full Stack Developer, I would like to build seamless web experiences from front to back. I thrive on solving
								real-world problems with clean code and thoughtful design using HTML, CSS, JavaScritp, NodeJS.
							</p>
							<p>
								Eager to grow professionally, I hope to embrace new frameworks, collaborate with others, and adapt quickly. My goal is to craft
								reliable, user-focused solutions that make a meaningful impact.
							</p>
							<Link
								to='about'
								className='about-cta d-flex align-items-center btn btn-secondary gap-2'
								type='button'
							>
								Read More <FaArrowRight />
							</Link>
						</Stack>
					</Col>
				</Row>
			</Container>
		</Stack>
	)
}
export default About
