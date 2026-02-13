import { useParams } from 'react-router-dom'
import { PreLoader } from '../preloader/preloaders'
import { Error } from '../error/errors'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useQuery } from '@tanstack/react-query'

export const ProjectDetails = () => {
	const params = useParams()

	const url = `https://api.github.com/repos/leightongrant/${params.id}/readme`

	const fetchOptions = {
		headers: {
			Accept: 'application/vnd.github.v3.raw',
		},
	}
	const { isPending, error, data, isError } = useQuery({
		queryKey: ['readme'],
		queryFn: async () => {
			const response = await fetch(url, fetchOptions)
			return await response.text()
		},
	})

	if (isPending) return <PreLoader />
	if (isError) return <Error error={error.message} />

	return (
		<Stack
			className='block-padding-large'
			as='main'
		>
			<Container>
				<ReactMarkdown
					components={{
						img: ({ ...props }) => (
							<img
								{...props}
								className='img-fluid rounded shadow'
								alt={props.alt || 'Markdown image'}
							/>
						),
					}}
				>
					{data}
				</ReactMarkdown>

				<Stack>
					<Link
						to='/projects'
						className='btn btn-dark mt-5 d-flex align-items-center gap-2'
						style={{ width: 'fit-content' }}
					>
						<FaArrowLeftLong /> Back to projects
					</Link>
				</Stack>
			</Container>
		</Stack>
	)
}
