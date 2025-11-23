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
import { normalizeRepoName } from '../utilities/normalize-repo-name'
import carousel1 from '../assets/images/carousel-1.webp'
import carousel2 from '../assets/images/carousel-2.webp'
import carousel3 from '../assets/images/carousel-3.webp'
import { useFetch } from '../hooks/hooks'
import { z } from 'zod'
import type { Repo } from '../hooks/hooks'
import { RepoSchema } from '../hooks/hooks'
import { PreLoader } from '../preloader/preloaders'
import { Error } from '../error/errors'

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
	const { loading, data, error } = useFetch('https://api.github.com/search/repositories?q=user:leightongrant+step8up')

	type RecentRepos = {
		id: number
		name: string
		description: string
		createdAt: string
		img: string
	}

	const DataSchema = z.array(RepoSchema)

	let repos: Repo[] = []
	let recentRepos: RecentRepos[] = []

	const validRepos = DataSchema.safeParse(data)
	if (validRepos.success) {
		repos = validRepos.data
		recentRepos = repos
			.sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
			.map((item: Repo, idx: number) => {
				return { id: item.id, name: normalizeRepoName(item.name), description: item.description, createdAt: item.created_at, img: carouselImages[idx] }
			})
			.slice(0, 3)
	}

	if (loading) return <PreLoader />
	if (error) return <Error error={error} />

	const CarouselImage = ({ text, img }: { text: string; img: string }) => {
		return (
			<Image
				className='d-block w-100 object-fit-cover'
				src={img}
				alt={text}
				height={800}
			/>
		)
	}
	return (
		<Stack className='project-homepage-container'>
			<Stack className='projects-homepage-content'>
				<Carousel>
					{recentRepos.map((repo: RecentRepos) => {
						return (
							<Carousel.Item
								interval={3000}
								key={repo.id}
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
