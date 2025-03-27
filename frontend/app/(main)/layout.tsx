import Providers from '../_components/Providers'

export default function MainLayout({ children}: Readonly<{
	children: React.ReactNode 
}>) {
	return (
		<Providers>
			<main>
				{children}
			</main>
		</Providers>
	)
}