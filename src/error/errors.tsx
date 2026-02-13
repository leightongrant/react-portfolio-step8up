import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6'

export const Error = ({ error }: { error: string }) => {
	return (
		<Stack as='main'>
			<Container className='flex-grow-1'>
				<Stack className='justify-content-center align-items-center h-100'>
					{/* <h1 className='display-1'>Error</h1> */}
					<p className='display-4'>{error || 'An error has occured'}</p>
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
