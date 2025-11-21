import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { PreLoader } from '../preloader/preloaders'
import { Error } from '../error/errors'
import ReactMarkdown from 'react-markdown'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

export const ProjectDetails = () => {
	const [data, setData] = useState<any>(null)
	const [error, setError] = useState<any>(null)
	const params = useParams()
	const url = `https://api.github.com/repos/leightongrant/${params.id}/readme`

	const getRepo = async () => {
		try {
			const response = await fetch(url, {
				headers: {
					Accept: 'application/vnd.github.v3.raw',
				},
			})
			if (response.ok) {
				const data = await response.text()
				setData(data)
				return
			}
			const error = await response.json()
			console.log(error)
			setError(error)
		} catch (error) {
			console.log(error)
			setError(error)
		}
	}
	useEffect(() => {
		getRepo()
	}, [])

	if (error) return <Error error={error} />
	if (!data) return <PreLoader />
	return (
		<Stack className='block-padding-large'>
			<Container>
				<ReactMarkdown remarkPlugins={[]}>{data}</ReactMarkdown>
			</Container>
		</Stack>
	)
}
