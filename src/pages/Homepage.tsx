import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import './Homepage.css'
import profileImage from '../assets/images/profile-img.webp'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { normalizeRepoName } from '../utilities/normalize-repo-name'
import carousel1 from '../assets/images/carousel-1.webp'
import carousel2 from '../assets/images/carousel-2.webp'
import carousel3 from '../assets/images/carousel-3.webp'

const carouselImages = [carousel1, carousel2, carousel3]

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
						className='hero-cta d-flex align-items-center btn btn-dark gap-2'
						type='button'
					>
						Get In Touch <FaArrowRight />
					</Link>
				</Stack>
			</Stack>
		</Stack>
	)
}

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

const Projects = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		getRepos()
	}, [])
	const getRepos = async () => {
		try {
			const response = await fetch('https://api.github.com/search/repositories?q=user:leightongrant+step8up')
			if (response.ok) {
				const data = await response.json()
				const { items } = data
				const recentRepos = items
					.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
					.map((item: any, idx: number) => {
						return { name: normalizeRepoName(item.name), description: item.description, createAt: item.created_at, img: carouselImages[idx] }
					})
					.slice(0, 3)

				setData(recentRepos)
				return
			}
			const error = await response.json()
			console.log(error)
		} catch (error) {
			console.log(error)
		}
	}

	const CarouselImage = ({ text, img }: { text: string; img: string }) => {
		return (
			<Image
				className='d-block w-100 object-fit-cover'
				src={img}
				alt={text}
				height={600}
			/>
		)
	}
	return (
		<Stack className='project-homepage-container'>
			<Stack className='projects-homepage-content'>
				<Carousel>
					{data &&
						data.map((repo: { name: string; createdAt: string; img: string; description: string }) => {
							return (
								<Carousel.Item
									interval={3000}
									key={repo.name}
								>
									<CarouselImage
										text={repo.name}
										img={repo.img}
									/>
									<Carousel.Caption className='text-dark fw-bold d-flex flex-column align-items-center gap-3 px-5'>
										<h3 className='fs-2'>{repo.name.toLocaleUpperCase()}</h3>
										<p style={{ maxWidth: '600px', textAlign: 'center' }}>{repo.description}</p>
										<Link
											to='projects'
											className='projects-cta d-flex align-items-center btn btn-outline-dark gap-2 m-4'
											type='button'
										>
											See More <FaArrowRight />
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
							)
						})}
				</Carousel>
			</Stack>
		</Stack>
	)
}

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
