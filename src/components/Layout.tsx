import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type MyComponentProps = {
	children: ReactNode
}

export const Layout = ({ children }: MyComponentProps) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
