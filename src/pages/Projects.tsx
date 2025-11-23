import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa6'
import { normalizeRepoName } from '../utilities/normalize-repo-name'
import { PreLoader } from '../preloader/preloaders'
import { Error } from '../error/errors'
import { Link } from 'react-router-dom'
import './Projects.css'
import { z } from 'zod'
import { useFetch } from '../hooks/hooks'
import { RepoSchema } from '../hooks/hooks'
import type { Repo } from '../hooks/hooks'

const ProjectCard = ({ repo }: { repo: any }) => {
	const title = normalizeRepoName(repo.name)

	const getTechColor = (tech: string): string => {
		const normalizedTech = tech.replace(/[\.\-\s]/g, '').toLowerCase()
		const colorMap: Record<string, string> = {
			react: '61DAFB',
			reactjs: '61DAFB',
			typescript: '3178C6',
			javascript: 'F7DF1E',
			nodejs: '339933',
			expressjs: '000000',
			vite: '646CFF',
			bootstrap: '7952B3',
			bootstrap5: '7952B3',
			python: '3776AB',
			python3: '3776AB',
			html: 'E34F26',
			html5: 'E34F26',
			css: '1572B6',
			css3: '1572B6',
			jquery: '0769AD',
			githubactions: '2088FF',
			jwt: '000000',
			jwtauthentication: '000000',
			bcryptjs: 'FF5733',
			joivalidation: 'FF6600',
			materializecss: 'EE6E73',
			reactbootstrap: '7952B3',
			vitejs: '646CFF',
		}

		return colorMap[normalizedTech] || '#666666'
	}

	const techs = repo.topics.map((topic: string) => {
		return { tech: topic, color: getTechColor(topic) }
	})

	const badgeUrls = techs.map((topic: any) => {
		const label = encodeURIComponent(topic.tech)
		const color = topic.color
		return `https://img.shields.io/badge/${label}-${color}?style=for-the-badge&logo=${label}&logoColor=white`
	})

	return (
		<Card>
			<Card.Header>
				<Card.Title className='text-uppercase'>{title}</Card.Title>
			</Card.Header>
			<Card.Body className='d-grid'>
				<Card.Text>{repo.description}</Card.Text>
				<Stack
					direction='horizontal'
					className='flex-wrap'
					gap={2}
				>
					{badgeUrls.map((url: string, idx: number) => (
						<Image
							src={url}
							key={idx}
						/>
					))}
				</Stack>
			</Card.Body>
			<Card.Footer className='d-flex justify-content-between'>
				<Link to={`${repo.name}`}>
					Details <FaArrowRight />
				</Link>
				<Stack direction='horizontal'>
					<Card.Link
						href={repo.html_url}
						target='_blank'
						rel='noopener'
					>
						Repo <HiOutlineExternalLink />
					</Card.Link>
					<Card.Link
						href={repo.homepage}
						target='_blank'
						rel='noopener'
					>
						Live Demo <HiOutlineExternalLink />
					</Card.Link>
				</Stack>
			</Card.Footer>
		</Card>
	)
}

export const ProjectsPage = () => {
	const { loading, data, error } = useFetch('https://api.github.com/search/repositories?q=user:leightongrant+step8up', {
		headers: {
			Accept: 'application/json',
		},
	})

	const DataSchema = z.array(RepoSchema)
	let repos: Repo[] = []
	const validRepos = DataSchema.safeParse(data)
	if (validRepos.success) {
		repos = validRepos.data
	}

	if (error) return <Error error={error} />
	if (loading) return <PreLoader />

	return (
		<Stack
			as='main'
			className='block-padding-large'
		>
			<Container className='flex-grow-1 d-flex align-items-center'>
				<Row>
					{repos.map((item: Repo) => {
						return (
							<Col
								key={item.id}
								xs={12}
								md={6}
								lg={4}
								className='mb-4'
							>
								<ProjectCard repo={item} />
							</Col>
						)
					})}
				</Row>
			</Container>
		</Stack>
	)
}
