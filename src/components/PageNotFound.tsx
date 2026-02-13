import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const PageNotFound = () => {
	const navigate = useNavigate()
	useEffect(() => {
		navigate('/404', { state: { from: 'home' } })
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<Stack as='main'>
			<Container className='flex-grow-1'>
				<Stack className='justify-content-center align-items-center h-100'>
					<h1 className='display-1'>404</h1>
					<p>The page you reqested is not found!</p>
					<Link
						to='/'
						className='btn btn-dark mt-5 d-flex align-items-center gap-2'
						style={{ width: 'fit-content' }}
					>
						<FaArrowLeftLong /> Back to homepage
					</Link>
				</Stack>
			</Container>
		</Stack>
	)
}
