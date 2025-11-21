import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import './PageBanner.css'
import { useLocation } from 'react-router-dom'
export const PageBanner = () => {
	const { pathname } = useLocation()
	return (
		<Stack className='page-banner-container bg-secondary'>
			<Stack className='banner-overlay'>
				<Container className='flex-grow-1'>
					<Stack className='page-banner-content justify-content-center h-100'>
						<span className='fs-1 fw-bold banner-title'>{pathname.slice(1).toLocaleUpperCase()}</span>
					</Stack>
				</Container>
			</Stack>
		</Stack>
	)
}
