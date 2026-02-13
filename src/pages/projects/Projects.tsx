import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PreLoader } from '../../preloader/preloaders'
import { Error } from '../../error/errors'
import ProjectCard from './ProjectCard'
import { useGithubData } from '../../hooks/useGithubData'

import type { Repos, Repo } from '../../hooks/useGithubData'

import './Projects.css'

export const ProjectsPage = () => {
	const { isPending, error, data, isError } = useGithubData()

	if (isPending) return <PreLoader />
	if (isError) return <Error error={error.message} />
	if (!data) return <Error error={'No projects found'} />

	const repos: Repos = data

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
