import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import './Homepage.css'
import profileImage from '../assets/images/profile-img.webp'

const Hero = () => {
	return (
		<Stack className='hero-container'>
			<Stack className='hero-content'>
				<span className='hero-title text-center fs-1'>Welcome to my portfolio</span>
				<Button
					variant='dark'
					className='hero-cta'
				>
					About me
				</Button>
			</Stack>
		</Stack>
	)
}

const About = () => {
	return (
		<Stack className='about-homepage-container'>
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
							<Button
								variant='secondary'
								className='about-cta'
							>
								Read More
							</Button>
						</Stack>
					</Col>
				</Row>
			</Container>
		</Stack>
	)
}

const Projects = () => {
	const CarouselImage = ({ text }: { text: string }) => {
		return (
			<img
				className='d-block w-100'
				src={`holder.js/800x450?text=${text}&bg=f5f5f5`}
				alt={text}
			/>
		)
	}
	return (
		<Stack className='project-homepage-container'>
			<Stack className='projects-homepage-content'>
				<Carousel>
					<Carousel.Item interval={1000}>
						<CarouselImage text='First slide' />
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={500}>
						<CarouselImage text='Second slide' />
						<Carousel.Caption>
							<h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<CarouselImage text='Third slide' />
						<Carousel.Caption>
							<h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</Stack>
		</Stack>
	)
}

const Contact = () => {
	return (
		<Stack className='contact-homepage-container'>
			<Stack className='contact-homepage-content'>
				<h2 className='contact-homepage-title text-center'>Contact</h2>
				<Button
					variant='dark'
					className='contact-cta'
				>
					Contact Me
				</Button>
			</Stack>
		</Stack>
	)
}

export const Homepage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Projects />
			<Contact />
		</main>
	)
}
