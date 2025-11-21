import Stack from 'react-bootstrap/Stack'

export const Error = ({ error }: { error: any }) => {
	return (
		<Stack className='justify-content-center align-items-center'>
			<Stack>{error.message || 'An error has occured'}</Stack>
		</Stack>
	)
}
