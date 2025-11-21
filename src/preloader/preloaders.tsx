import Spinner from 'react-bootstrap/Spinner'
import Stack from 'react-bootstrap/Stack'

export const PreLoader = () => {
	return (
		<Stack className='justify-content-center align-items-center'>
			<Spinner
				animation='border'
				role='status'
			>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>
		</Stack>
	)
}
