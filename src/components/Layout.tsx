import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import './Layout.css'

type MyComponentProps = {
	children: ReactNode
}

export const Layout = ({ children }: MyComponentProps) => {
	return (
		<div className='page-wrapper'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
