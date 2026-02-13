import Stack from 'react-bootstrap/Stack'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { normalizeRepoName } from '../../utilities/normalize-repo-name'
import carousel1 from '../../assets/images/carousel-1.webp'
import carousel2 from '../../assets/images/carousel-2.webp'
import carousel3 from '../../assets/images/carousel-3.webp'
import { PreLoader } from '../../preloader/preloaders'
import { Error } from '../../error/errors'
import { useGithubData } from '../../hooks/useGithubData'
import type { Repos, Repo } from '../../hooks/useGithubData'

const carouselImages = [carousel1, carousel2, carousel3]
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

const Projects = () => {
	const { isPending, error, data } = useGithubData()

	if (isPending) return <PreLoader />
	if (error) return <Error error={error.message} />
	if (!data) return <Error error={'No repos'} />

	let recentRepos: Repos = data

	const repos = recentRepos
		.sort((a: Repo, b: Repo) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
		.map((item: Repo, idx: number) => {
			return {
				id: item.id,
				name: normalizeRepoName(item.name),
				description: item.description,
				createdAt: item.created_at,
				img: carouselImages[idx],
			}
		})
		.slice(0, 3)

	return (
		<Stack className='project-homepage-container'>
			<Stack className='projects-homepage-content'>
				<Carousel>
					{repos.map((repo) => {
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

export default Projects
